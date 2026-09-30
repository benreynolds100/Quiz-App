/* Scotland Quiz — Question Bank
   100 questions across six categories.
   Each object: { question, options [4 strings], answer (0-based index), category }
*/

const questions = [

  // ── HISTORY (17) ──────────────────────────────────────────────────────────

  {
    question: "In which year did Robert the Bruce defeat the English army at the Battle of Bannockburn?",
    options: ["1296", "1314", "1320", "1346"],
    answer: 1,
    category: "History"
  },
  {
    question: "In which year was the Act of Union between the Kingdom of Scotland and the Kingdom of England signed?",
    options: ["1603", "1688", "1707", "1745"],
    answer: 2,
    category: "History"
  },
  {
    question: "Mary Queen of Scots was executed in 1587. At which English castle did her execution take place?",
    options: ["Windsor Castle", "Fotheringhay Castle", "Warwick Castle", "Tower of London"],
    answer: 1,
    category: "History"
  },
  {
    question: "The Battle of Culloden in April 1746 was the final confrontation of which Jacobite rebellion?",
    options: ["The Fifteen", "The Forty-Five", "The English Civil War", "The Bishops' Wars"],
    answer: 1,
    category: "History"
  },
  {
    question: "Which Scottish king was killed at the Battle of Flodden in 1513?",
    options: ["James III", "James IV", "James V", "James VI"],
    answer: 1,
    category: "History"
  },
  {
    question: "The Declaration of Arbroath, asserting Scottish independence, was written in which year?",
    options: ["1296", "1306", "1320", "1371"],
    answer: 2,
    category: "History"
  },
  {
    question: "William Wallace, Guardian of Scotland, was captured by the English and executed in which year?",
    options: ["1296", "1298", "1302", "1305"],
    answer: 3,
    category: "History"
  },
  {
    question: "Who led the Jacobite Rebellion of 1745, known as the Forty-Five?",
    options: ["James Francis Edward Stuart", "Charles Edward Stuart", "George Keith", "Lord Lovat"],
    answer: 1,
    category: "History"
  },
  {
    question: "In which year did James VI of Scotland also become James I of England, uniting the two crowns?",
    options: ["1587", "1603", "1625", "1649"],
    answer: 1,
    category: "History"
  },
  {
    question: "The Highland Clearances — forced evictions of tenant farmers — primarily took place during which two centuries?",
    options: ["14th and 15th", "16th and 17th", "18th and 19th", "19th and 20th"],
    answer: 2,
    category: "History"
  },
  {
    question: "Which Scottish religious reformer led the Protestant Reformation in Scotland from the 1550s?",
    options: ["George Wishart", "John Knox", "Andrew Melville", "Patrick Hamilton"],
    answer: 1,
    category: "History"
  },
  {
    question: "What was the name of Scotland's ill-fated colonial venture in Panama in the late 1690s?",
    options: ["The Albany Plan", "The Darien Scheme", "The Carolina Project", "The Nova Scotia Settlement"],
    answer: 1,
    category: "History"
  },
  {
    question: "The Stone of Destiny (Stone of Scone), used in the coronation of Scottish monarchs, was returned to Scotland from London in which year?",
    options: ["1979", "1989", "1996", "1999"],
    answer: 2,
    category: "History"
  },
  {
    question: "At which 1297 battle did William Wallace defeat an English army by attacking it while it crossed a river?",
    options: ["Battle of Falkirk", "Battle of Stirling Bridge", "Battle of Methven", "Battle of Loudoun Hill"],
    answer: 1,
    category: "History"
  },
  {
    question: "Robert the Bruce was crowned King of Scotland in which year?",
    options: ["1296", "1302", "1306", "1314"],
    answer: 2,
    category: "History"
  },
  {
    question: "The Act of Union in 1707 united Scotland and England into which new kingdom?",
    options: ["The Kingdom of Britain", "The United Kingdom of Great Britain", "The Kingdom of Great Britain", "The British Empire"],
    answer: 2,
    category: "History"
  },
  {
    question: "Which Scottish monarch, executed in 1587, was the mother of James VI of Scotland?",
    options: ["Anne of Denmark", "Mary Queen of Scots", "Margaret Tudor", "Madeleine of Valois"],
    answer: 1,
    category: "History"
  },

  // ── GEOGRAPHY (17) ────────────────────────────────────────────────────────

  {
    question: "What is the highest mountain in Scotland (and in the British Isles)?",
    options: ["Ben Lomond", "Ben Macdui", "Ben Nevis", "Cairn Gorm"],
    answer: 2,
    category: "Geography"
  },
  {
    question: "Which is the largest loch in Scotland by surface area?",
    options: ["Loch Ness", "Loch Lomond", "Loch Tay", "Loch Awe"],
    answer: 1,
    category: "Geography"
  },
  {
    question: "Which Scottish loch, at around 310 metres, is the deepest in Scotland?",
    options: ["Loch Ness", "Loch Lomond", "Loch Morar", "Loch Tay"],
    answer: 2,
    category: "Geography"
  },
  {
    question: "Which is the longest river in Scotland, flowing approximately 193 km to the North Sea?",
    options: ["River Clyde", "River Forth", "River Tay", "River Dee"],
    answer: 2,
    category: "Geography"
  },
  {
    question: "What is the capital city of Scotland?",
    options: ["Glasgow", "Edinburgh", "Aberdeen", "Dundee"],
    answer: 1,
    category: "Geography"
  },
  {
    question: "Which city is the largest in Scotland by population?",
    options: ["Edinburgh", "Glasgow", "Aberdeen", "Dundee"],
    answer: 1,
    category: "Geography"
  },
  {
    question: "How many Munros (Scottish mountains over 3,000 feet) are officially recognised?",
    options: ["182", "214", "282", "344"],
    answer: 2,
    category: "Geography"
  },
  {
    question: "Which island group forms the most northerly part of the United Kingdom?",
    options: ["Orkney Islands", "Shetland Islands", "Outer Hebrides", "Inner Hebrides"],
    answer: 1,
    category: "Geography"
  },
  {
    question: "What is the largest island of Scotland's Inner Hebrides?",
    options: ["Islay", "Mull", "Jura", "Skye"],
    answer: 3,
    category: "Geography"
  },
  {
    question: "The Cairngorms National Park is the largest national park in the United Kingdom. Roughly how large is it?",
    options: ["1,000 sq km", "2,200 sq km", "4,500 sq km", "6,000 sq km"],
    answer: 2,
    category: "Geography"
  },
  {
    question: "The Firth of Forth is the estuary of which Scottish river?",
    options: ["River Tay", "River Tweed", "River Forth", "River Clyde"],
    answer: 2,
    category: "Geography"
  },
  {
    question: "The Massacre of Glencoe in 1692 saw government troops kill members of which Highland clan?",
    options: ["Clan Cameron", "Clan Campbell", "Clan MacDonald", "Clan MacLean"],
    answer: 2,
    category: "History"
  },
  {
    question: "Which Scottish city is nicknamed the 'Granite City' due to its distinctive building material?",
    options: ["Dundee", "Perth", "Aberdeen", "Inverness"],
    answer: 2,
    category: "Geography"
  },
  {
    question: "Arthur's Seat, an ancient volcano, is the highest point of which Scottish city?",
    options: ["Glasgow", "Dundee", "Stirling", "Edinburgh"],
    answer: 3,
    category: "Geography"
  },
  {
    question: "The Orkney island group lies to the north of mainland Scotland. Which of these islands is part of Orkney?",
    options: ["Lewis", "Jura", "Hoy", "Tiree"],
    answer: 2,
    category: "Geography"
  },
  {
    question: "The Pentland Firth is a stretch of water separating which two areas?",
    options: ["Orkney and Shetland", "Orkney and mainland Scotland", "Shetland and Norway", "Skye and mainland Scotland"],
    answer: 1,
    category: "Geography"
  },
  {
    question: "Scotland shares a land border with only one other country. Which is it?",
    options: ["Wales", "Ireland", "England", "Northern Ireland"],
    answer: 2,
    category: "Geography"
  },

  // ── CULTURE (17) ──────────────────────────────────────────────────────────

  {
    question: "What is Scotland's national dish, traditionally made with sheep offal, oatmeal, onions, and spices?",
    options: ["Cullen Skink", "Cranachan", "Haggis", "Cock-a-leekie"],
    answer: 2,
    category: "Culture"
  },
  {
    question: "Burns Night is celebrated on 25 January each year to mark the birthday of which poet?",
    options: ["Walter Scott", "Robert Burns", "James Hogg", "Robert Fergusson"],
    answer: 1,
    category: "Culture"
  },
  {
    question: "What name is given to Scotland's traditional New Year celebration?",
    options: ["Samhain", "Hogmanay", "Beltane", "Imbolc"],
    answer: 1,
    category: "Culture"
  },
  {
    question: "On which date is St Andrew's Day, Scotland's national day, celebrated each year?",
    options: ["25 January", "30 November", "17 March", "23 April"],
    answer: 1,
    category: "Culture"
  },
  {
    question: "What plant is Scotland's national emblem?",
    options: ["Red Rose", "Leek", "Thistle", "Shamrock"],
    answer: 2,
    category: "Culture"
  },
  {
    question: "'Auld Lang Syne', traditionally sung at New Year, was based on a poem by which Scottish poet?",
    options: ["William Dunbar", "Robert Fergusson", "James Hogg", "Robert Burns"],
    answer: 3,
    category: "Culture"
  },
  {
    question: "Which Scottish carbonated soft drink is sometimes called 'Scotland's other national drink'?",
    options: ["Tennent's Lager", "Irn-Bru", "Barr's Cream Soda", "McEwan's Export"],
    answer: 1,
    category: "Culture"
  },
  {
    question: "The Edinburgh Festival Fringe, the world's largest arts festival, takes place in which month?",
    options: ["June", "July", "August", "September"],
    answer: 2,
    category: "Culture"
  },
  {
    question: "Scotch whisky must be matured in oak casks in Scotland for a minimum of how many years before it can be sold?",
    options: ["1", "2", "3", "5"],
    answer: 2,
    category: "Culture"
  },
  {
    question: "What is a 'ceilidh'?",
    options: ["A type of Scottish flatbread", "A traditional social gathering with folk music and dancing", "A Highland clan parliament", "A form of Gaelic oral poetry"],
    answer: 1,
    category: "Culture"
  },
  {
    question: "Which annual Scottish events feature traditional athletic competitions such as tossing the caber, throwing the hammer, and the shot put?",
    options: ["The Royal Highland Show", "Highland Games", "The National Mod", "Braemar Gathering only"],
    answer: 1,
    category: "Culture"
  },
  {
    question: "Scottish Gaelic is today most commonly spoken in which part of Scotland?",
    options: ["The Scottish Borders", "The Grampian Mountains", "The Outer Hebrides (Western Isles)", "Orkney"],
    answer: 2,
    category: "Culture"
  },
  {
    question: "What colour is the background of the Scottish Saltire flag?",
    options: ["Red", "Green", "White", "Blue"],
    answer: 3,
    category: "Culture"
  },
  {
    question: "Which song, written by Roy Williamson of The Corries, is widely regarded as Scotland's unofficial national anthem?",
    options: ["Scotland the Brave", "Highland Cathedral", "Flower of Scotland", "A Man's A Man for A' That"],
    answer: 2,
    category: "Culture"
  },
  {
    question: "What is the official national animal of Scotland?",
    options: ["Red Deer", "Golden Eagle", "Scottish Wildcat", "Unicorn"],
    answer: 3,
    category: "Culture"
  },
  {
    question: "The traditional Scottish soup 'Cullen Skink' is made primarily with which ingredient?",
    options: ["Lamb", "Smoked haddock", "Venison", "Leeks"],
    answer: 1,
    category: "Culture"
  },
  {
    question: "The Royal Edinburgh Military Tattoo — a spectacular display of military bands and performers — takes place on which Edinburgh location?",
    options: ["Holyrood Park", "Edinburgh Castle Esplanade", "Murrayfield Stadium", "Princes Street Gardens"],
    answer: 1,
    category: "Culture"
  },

  // ── FAMOUS SCOTS (17) ─────────────────────────────────────────────────────

  {
    question: "Alexander Fleming, who discovered penicillin in 1928, was born in which Scottish county?",
    options: ["Lanarkshire", "Ayrshire", "Perthshire", "Aberdeenshire"],
    answer: 1,
    category: "Famous Scots"
  },
  {
    question: "James Watt's improvements to the steam engine were pivotal to the Industrial Revolution. He was born in which Scottish town?",
    options: ["Greenock", "Paisley", "Motherwell", "Falkirk"],
    answer: 0,
    category: "Famous Scots"
  },
  {
    question: "Economist Adam Smith, author of 'The Wealth of Nations' (1776), was born in which Scottish town?",
    options: ["Edinburgh", "Glasgow", "Kirkcaldy", "St Andrews"],
    answer: 2,
    category: "Famous Scots"
  },
  {
    question: "John Logie Baird gave the first public demonstration of working television in 1926. He was born in which Scottish town?",
    options: ["Glasgow", "Helensburgh", "Paisley", "Dundee"],
    answer: 1,
    category: "Famous Scots"
  },
  {
    question: "Arthur Conan Doyle, creator of Sherlock Holmes, was born in which Scottish city?",
    options: ["Glasgow", "Aberdeen", "Edinburgh", "Dundee"],
    answer: 2,
    category: "Famous Scots"
  },
  {
    question: "Robert Louis Stevenson wrote 'Treasure Island' and 'The Strange Case of Dr Jekyll and Mr Hyde'. In which city was he born?",
    options: ["Glasgow", "Edinburgh", "Aberdeen", "Inverness"],
    answer: 1,
    category: "Famous Scots"
  },
  {
    question: "Which Scottish physicist formulated the classical theory of electromagnetic radiation, paving the way for radio and television technology?",
    options: ["Lord Kelvin", "James Clerk Maxwell", "Peter Higgs", "David Brewster"],
    answer: 1,
    category: "Famous Scots"
  },
  {
    question: "Philanthropist Andrew Carnegie, one of the wealthiest people in history, was born in which Scottish town?",
    options: ["Perth", "Stirling", "Dunfermline", "Forfar"],
    answer: 2,
    category: "Famous Scots"
  },
  {
    question: "Naturalist John Muir, known as the 'Father of the National Parks', was born in which Scottish town?",
    options: ["Haddington", "Dunbar", "North Berwick", "Musselburgh"],
    answer: 1,
    category: "Famous Scots"
  },
  {
    question: "Architect and artist Charles Rennie Mackintosh designed a famous art school. In which city is that school?",
    options: ["Edinburgh", "Dundee", "Aberdeen", "Glasgow"],
    answer: 3,
    category: "Famous Scots"
  },
  {
    question: "Actor Sean Connery, the first screen James Bond, was born in which Edinburgh neighbourhood?",
    options: ["Morningside", "Leith", "Fountainbridge", "Gorgie"],
    answer: 2,
    category: "Famous Scots"
  },
  {
    question: "Scottish philosopher David Hume is famous for which major work published in 1739–1740?",
    options: ["An Essay Concerning Human Understanding", "A Treatise of Human Nature", "The Wealth of Nations", "The Theory of Moral Sentiments"],
    answer: 1,
    category: "Famous Scots"
  },
  {
    question: "Scottish cyclist Chris Hoy won six Olympic gold medals. In which sport did he compete?",
    options: ["Swimming", "Athletics (Track)", "Cycling", "Rowing"],
    answer: 2,
    category: "Famous Scots"
  },
  {
    question: "Walter Scott's novel 'Waverley' (1814) is often called the first historical novel in English. Where was Scott born?",
    options: ["Edinburgh", "Glasgow", "Stirling", "Perth"],
    answer: 0,
    category: "Famous Scots"
  },
  {
    question: "Scottish physician James Young Simpson pioneered the use of which substance as a surgical anaesthetic from 1847?",
    options: ["Ether", "Morphine", "Chloroform", "Cocaine"],
    answer: 2,
    category: "Famous Scots"
  },
  {
    question: "Which Scottish-born inventor is credited with patenting the telephone in 1876?",
    options: ["James Watt", "Alexander Graham Bell", "John Logie Baird", "William Murdoch"],
    answer: 1,
    category: "Famous Scots"
  },
  {
    question: "Engineer Thomas Telford, born in Westerkirk, Dumfriesshire, built the Pontcysyllte Aqueduct and the Menai Suspension Bridge. Which of these did he NOT build?",
    options: ["The Menai Suspension Bridge", "The Pontcysyllte Aqueduct", "The Clifton Suspension Bridge", "The Caledonian Canal"],
    answer: 2,
    category: "Famous Scots"
  },

  // ── SPORT (16) ────────────────────────────────────────────────────────────

  {
    question: "St Andrews, often called the 'Home of Golf', is located in which Scottish council area?",
    options: ["Perth and Kinross", "Fife", "Angus", "Dundee City"],
    answer: 1,
    category: "Sport"
  },
  {
    question: "The Scottish FA Cup is often claimed as the oldest national association football cup competition in the world. In which year was its first final played?",
    options: ["1851", "1874", "1888", "1903"],
    answer: 1,
    category: "Sport"
  },
  {
    question: "The Glasgow derby between Celtic and Rangers is known by what name?",
    options: ["The Auld Enemy", "The Old Firm", "The Glaswegian Derby", "The Big Match"],
    answer: 1,
    category: "Sport"
  },
  {
    question: "Scotland's national football stadium, Hampden Park, is located in which city?",
    options: ["Edinburgh", "Dundee", "Aberdeen", "Glasgow"],
    answer: 3,
    category: "Sport"
  },
  {
    question: "Jackie Stewart won the Formula 1 World Championship in 1969, 1971, and 1973. He was born near which Scottish town?",
    options: ["Paisley", "Dumbarton", "Motherwell", "Hamilton"],
    answer: 1,
    category: "Sport"
  },
  {
    question: "Andy Murray won his first Wimbledon singles title in which year?",
    options: ["2011", "2012", "2013", "2014"],
    answer: 2,
    category: "Sport"
  },
  {
    question: "Andy Murray was born in which Scottish town?",
    options: ["Glasgow", "Edinburgh", "Dunblane", "Perth"],
    answer: 2,
    category: "Sport"
  },
  {
    question: "The Commonwealth Games were held in Glasgow in which year?",
    options: ["2010", "2012", "2014", "2016"],
    answer: 2,
    category: "Sport"
  },
  {
    question: "Curling, the sport of sliding stones along ice towards a target, is said to have originated in Scotland. In which century did the earliest written records of it appear?",
    options: ["14th century", "16th century", "18th century", "20th century"],
    answer: 1,
    category: "Sport"
  },
  {
    question: "Kenny Dalglish had a celebrated playing career at which two clubs?",
    options: ["Celtic and Arsenal", "Celtic and Liverpool", "Rangers and Everton", "Celtic and Manchester United"],
    answer: 1,
    category: "Sport"
  },
  {
    question: "In which event at the Highland Games does a competitor toss a large tapered wooden pole?",
    options: ["The Hammer", "The Shot Put", "The Caber Toss", "The Sheaf Toss"],
    answer: 2,
    category: "Sport"
  },
  {
    question: "Scotland played in the world's first ever official international football match in 1872. Who were the opponents?",
    options: ["Wales", "Ireland", "England", "France"],
    answer: 2,
    category: "Sport"
  },
  {
    question: "Colin Montgomerie won the European Tour Order of Merit seven consecutive times. Between which years did that run take place?",
    options: ["1989–1995", "1991–1997", "1993–1999", "1995–2001"],
    answer: 2,
    category: "Sport"
  },
  {
    question: "Scottish sprinter Allan Wells won an Olympic gold medal at the 1980 Moscow Games. In which event?",
    options: ["200 metres", "100 metres", "110 m hurdles", "400 metres"],
    answer: 1,
    category: "Sport"
  },
  {
    question: "In which year did Scotland host the Ryder Cup golf tournament at Gleneagles in Perthshire?",
    options: ["2010", "2012", "2014", "2016"],
    answer: 2,
    category: "Sport"
  },
  {
    question: "Shinty is a traditional Scottish stick-and-ball sport. It is most closely related to which Irish sport?",
    options: ["Gaelic Football", "Hurling", "Camogie", "Rounders"],
    answer: 1,
    category: "Sport"
  },

  // ── LANDMARKS (16) ────────────────────────────────────────────────────────

  {
    question: "Edinburgh Castle sits on a geological feature known as Castle Rock. What type of geological formation is Castle Rock?",
    options: ["A granite outcrop", "A volcanic plug", "A limestone karst", "A sandstone mesa"],
    answer: 1,
    category: "Landmarks"
  },
  {
    question: "The Forth Rail Bridge, opened in 1890, was designated a UNESCO World Heritage Site in which year?",
    options: ["1998", "2005", "2010", "2015"],
    answer: 3,
    category: "Landmarks"
  },
  {
    question: "Eilean Donan Castle in the Highlands sits at the junction of how many sea lochs?",
    options: ["Two", "Three", "Four", "Five"],
    answer: 1,
    category: "Landmarks"
  },
  {
    question: "Skara Brae, the remarkable Neolithic village in Orkney, was uncovered when a storm stripped away its covering in which century?",
    options: ["15th century", "17th century", "19th century", "20th century"],
    answer: 2,
    category: "Landmarks"
  },
  {
    question: "Rosslyn Chapel, featured prominently in Dan Brown's novel 'The Da Vinci Code', is located near which Scottish village?",
    options: ["Haddington", "Roslin", "Penicuik", "Dalkeith"],
    answer: 1,
    category: "Landmarks"
  },
  {
    question: "The Falkirk Wheel is described as the world's only rotating boat lift. It connects which two Scottish canals?",
    options: ["Crinan Canal and Caledonian Canal", "Union Canal and Forth and Clyde Canal", "Forth and Clyde Canal and Edinburgh Canal", "Monkland Canal and Union Canal"],
    answer: 1,
    category: "Landmarks"
  },
  {
    question: "The Glenfinnan Viaduct, featured in the Harry Potter film series, carries the West Highland Line to which final destination?",
    options: ["Fort William", "Kyle of Lochalsh", "Mallaig", "Oban"],
    answer: 2,
    category: "Landmarks"
  },
  {
    question: "Which Edinburgh landmark — an ancient extinct volcano — is the highest point within the city?",
    options: ["Calton Hill", "Blackford Hill", "Arthur's Seat", "Corstorphine Hill"],
    answer: 2,
    category: "Landmarks"
  },
  {
    question: "Balmoral Castle, the Scottish summer residence of the Royal Family, lies within which national park?",
    options: ["Loch Lomond and The Trossachs", "The Cairngorms", "There is no national park there", "Highland National Park"],
    answer: 1,
    category: "Landmarks"
  },
  {
    question: "Dunnottar Castle, perched dramatically on a clifftop in Aberdeenshire, stands near which town?",
    options: ["Peterhead", "Fraserburgh", "Stonehaven", "Banchory"],
    answer: 2,
    category: "Landmarks"
  },
  {
    question: "The Kelpies are two giant horse-head sculptures near Falkirk. What are they made of?",
    options: ["Bronze", "Steel", "Aluminium", "Titanium"],
    answer: 1,
    category: "Landmarks"
  },
  {
    question: "Glamis Castle in Angus was the childhood home of which member of the Royal Family?",
    options: ["Princess Diana", "Queen Elizabeth II", "Queen Elizabeth The Queen Mother", "Princess Anne"],
    answer: 2,
    category: "Landmarks"
  },
  {
    question: "The Palace of Holyroodhouse, the official Scottish residence of the British monarch, sits at which end of Edinburgh's Royal Mile?",
    options: ["The top, near Edinburgh Castle", "The bottom, near Arthur's Seat", "The middle, near St Giles' Cathedral", "It is not on the Royal Mile"],
    answer: 1,
    category: "Landmarks"
  },
  {
    question: "The 'Old Man of Hoy' is a famous 137-metre red sandstone sea stack. On which Orkney island is it found?",
    options: ["Mainland Orkney", "Hoy", "Shapinsay", "South Ronaldsay"],
    answer: 1,
    category: "Landmarks"
  },
  {
    question: "Stirling Castle, a key stronghold in Scotland's Wars of Independence, overlooks the site of which famous battle?",
    options: ["Bannockburn", "Falkirk", "Prestonpans", "Sheriffmuir"],
    answer: 0,
    category: "Landmarks"
  },
  {
    question: "Which Scottish museum, designed by Japanese architect Kengo Kuma, opened in Dundee in 2018?",
    options: ["Kelvingrove Art Gallery", "National Museum of Scotland", "McManus Galleries", "V&A Dundee"],
    answer: 3,
    category: "Landmarks"
  }

];
