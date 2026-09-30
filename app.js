/* ═══════════════════════════════════════════════════════════════════════════
   Scotland Quiz — App logic
   Plain ES5-compatible vanilla JS; no dependencies.
   questions[] is loaded from questions.js which must be included first.
   ═══════════════════════════════════════════════════════════════════════════ */

'use strict';

// ── Constants ─────────────────────────────────────────────────────────────
var ROUND_SIZE      = 10;
var OPTION_LABELS   = ['A', 'B', 'C', 'D'];
var TIMER_DURATION  = 15;  // seconds per question (FR-10)

// ── State ──────────────────────────────────────────────────────────────────
var roundQuestions = [];    // the 10 questions for the current round
var currentIndex   = 0;     // which question we are on (0-based)
var score          = 0;     // number of correct answers so far
var answered       = false; // whether the current question has been answered
var timerInterval  = null;  // setInterval handle for the per-question countdown

// ── DOM references ─────────────────────────────────────────────────────────
var welcomeScreen  = document.getElementById('welcome-screen');
var quizScreen     = document.getElementById('quiz-screen');
var resultsScreen  = document.getElementById('results-screen');

var startBtn       = document.getElementById('start-btn');
var nextBtn        = document.getElementById('next-btn');
var playAgainBtn   = document.getElementById('play-again-btn');

var progressText   = document.getElementById('progress-text');
var progressFill   = document.getElementById('progress-fill');
var progressTrack  = document.querySelector('.progress-track');

var categoryLabel  = document.getElementById('category-label');
var questionText   = document.getElementById('question-text');
var optionsList    = document.getElementById('options-list');
var questionCard   = document.getElementById('question-card');

var scoreFraction  = document.getElementById('score-fraction');
var bandMessage    = document.getElementById('band-message');
var srFeedback     = document.getElementById('sr-feedback');
var timerDisplay   = document.getElementById('timer-display');

// ── Utility: Fisher-Yates shuffle ─────────────────────────────────────────
function shuffle(arr) {
  var a = arr.slice(); // copy — do not mutate the master array
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a;
}

// ── Utility: show one screen, hide others ──────────────────────────────────
function showScreen(screen) {
  welcomeScreen.classList.add('hidden');
  quizScreen.classList.add('hidden');
  resultsScreen.classList.add('hidden');
  screen.classList.remove('hidden');
}

// ── Utility: score band message ────────────────────────────────────────────
function getBandMessage(s) {
  if (s === 10) return 'Perfect score — are you Scottish?';
  if (s >= 7)   return 'Impressive — a true Scotland enthusiast!';
  if (s >= 4)   return 'Not bad — you know your Scotland!';
  return 'Keep practising — Scotland has more to offer!';
}

// ── Timer: clear any running interval ─────────────────────────────────────
function clearTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

// ── Timer: start a fresh 15-second countdown ───────────────────────────────
function startTimer() {
  clearTimer(); // always cancel any previous interval first
  var timeRemaining = TIMER_DURATION;
  timerDisplay.textContent = timeRemaining;
  timerDisplay.classList.remove('timer-warning');

  timerInterval = setInterval(function() {
    timeRemaining--;
    timerDisplay.textContent = timeRemaining;

    if (timeRemaining <= 5) {
      timerDisplay.classList.add('timer-warning');
    }

    if (timeRemaining <= 0) {
      clearTimer();
      handleTimeout();
    }
  }, 1000);
}

// ── Timer: handle expiry before player answered ────────────────────────────
function handleTimeout() {
  // Mark the question as answered (wrong) — score is NOT incremented
  answered = true;

  var q = roundQuestions[currentIndex];
  var buttons = optionsList.querySelectorAll('.option-btn');

  // Disable all buttons and highlight the correct answer green (UX-16)
  for (var i = 0; i < buttons.length; i++) {
    var btn = buttons[i];
    btn.disabled = true;
    if (parseInt(btn.getAttribute('data-index'), 10) === q.answer) {
      btn.classList.add('correct');
      btn.querySelector('.option-icon').textContent = '✓'; // ✓
    }
  }

  // Announce to screen readers via the assertive live region (UX-17)
  srFeedback.textContent = "Time's up. The correct answer was: " + q.options[q.answer];

  // Auto-advance after 1 500 ms (UX-16)
  setTimeout(function() {
    nextQuestion();
  }, 1500);
}

// ── Start a new round ──────────────────────────────────────────────────────
function startRound() {
  roundQuestions = shuffle(questions).slice(0, ROUND_SIZE);
  currentIndex   = 0;
  score          = 0;
  answered       = false;
  showScreen(quizScreen);
  renderQuestion();
}

// ── Render the current question ────────────────────────────────────────────
function renderQuestion() {
  answered = false;
  srFeedback.textContent = ''; // clear previous answer feedback for screen readers

  var q = roundQuestions[currentIndex];
  var questionNumber = currentIndex + 1;

  // Progress indicator
  progressText.textContent = 'Question ' + questionNumber + ' of ' + ROUND_SIZE;
  var pct = (questionNumber / ROUND_SIZE) * 100;
  progressFill.style.width = pct + '%';
  progressTrack.setAttribute('aria-valuenow', questionNumber);

  // Category + question text
  categoryLabel.textContent = q.category;
  questionText.textContent  = q.question;

  // Build option buttons
  optionsList.innerHTML = '';
  for (var i = 0; i < q.options.length; i++) {
    (function(index) {
      var btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.setAttribute('type', 'button');
      btn.setAttribute('data-index', index);

      // Label badge
      var labelSpan = document.createElement('span');
      labelSpan.className = 'option-label';
      labelSpan.setAttribute('aria-hidden', 'true');
      labelSpan.textContent = OPTION_LABELS[index];

      // Text
      var textSpan = document.createElement('span');
      textSpan.className = 'option-text';
      textSpan.textContent = q.options[index];

      // Tick / cross placeholder
      var iconSpan = document.createElement('span');
      iconSpan.className = 'option-icon';
      iconSpan.setAttribute('aria-hidden', 'true');

      btn.appendChild(labelSpan);
      btn.appendChild(textSpan);
      btn.appendChild(iconSpan);

      btn.addEventListener('click', function() {
        selectAnswer(index);
      });

      // Keyboard: Enter and Space already fire click on <button> natively.
      optionsList.appendChild(btn);
    }(i));
  }

  // Hide the Next button until an answer is selected
  nextBtn.classList.add('hidden');

  // Move focus to the first option so keyboard users can proceed immediately
  var firstBtn = optionsList.querySelector('.option-btn');
  if (firstBtn) {
    firstBtn.focus();
  }

  // Start the per-question countdown (FR-10)
  startTimer();
}

// ── Handle answer selection ────────────────────────────────────────────────
function selectAnswer(selectedIndex) {
  if (answered) return; // guard against double-tap / race
  clearTimer();         // stop the countdown the moment a choice is made
  answered = true;

  var q = roundQuestions[currentIndex];
  var isCorrect = (selectedIndex === q.answer);
  if (isCorrect) score++;

  // Apply feedback to every button
  var buttons = optionsList.querySelectorAll('.option-btn');
  for (var i = 0; i < buttons.length; i++) {
    var btn = buttons[i];
    btn.disabled = true; // prevent further clicks (FR-09)

    var icon = btn.querySelector('.option-icon');

    if (i === q.answer) {
      // Always highlight the correct answer green + tick
      btn.classList.add('correct');
      icon.textContent = '✓'; // ✓
    } else if (i === selectedIndex) {
      // Wrong selection — red + cross
      btn.classList.add('incorrect');
      icon.textContent = '✗'; // ✗
    }
  }

  // Reveal Next button and focus it
  nextBtn.classList.remove('hidden');
  nextBtn.focus();

  // Announce result to screen readers via the aria-live region
  srFeedback.textContent = isCorrect
    ? 'Correct!'
    : 'Incorrect. The correct answer was: ' + q.options[q.answer];
}

// ── Advance to next question or show results ───────────────────────────────
function nextQuestion() {
  // Prevent activation if the question hasn't been answered yet
  if (!answered) return;

  if (currentIndex >= ROUND_SIZE - 1) {
    // All questions answered — show results
    showResults();
    return;
  }

  // Brief opacity fade between questions (≤ 300 ms total)
  questionCard.classList.add('fading');

  setTimeout(function() {
    currentIndex++;
    renderQuestion();
    questionCard.classList.remove('fading');
  }, 200);
}

// ── Show results screen ────────────────────────────────────────────────────
function showResults() {
  clearTimer(); // defensive — ensure no interval survives into the results screen
  showScreen(resultsScreen);
  scoreFraction.textContent = score + ' / ' + ROUND_SIZE;
  bandMessage.textContent   = getBandMessage(score);
  playAgainBtn.focus();
}

// ── Event listeners ────────────────────────────────────────────────────────
startBtn.addEventListener('click', startRound);
nextBtn.addEventListener('click', nextQuestion);
playAgainBtn.addEventListener('click', startRound);
