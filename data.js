const COMPANIES = {
  "walmart": {
    id: "walmart", name: "Walmart Inc.", ticker: "WMT", cik: "0000104169",
    industry: "Retail", sector: "Retailing", hq: "Bentonville, AR",
    ceo: "Doug McMillon", founded: "1962", revenue: "$648B", employees: "2,100,000",
    description: "World's largest company by revenue",
    subsidiaries: [
      { name: "Sam's Club", type: "subsidiary", stake: "100%", desc: "Membership warehouse clubs" },
      { name: "Walmart Grocery", type: "brand", stake: "100%", desc: "Grocery division" },
      { name: "Flipkart", type: "subsidiary", stake: "~77%", desc: "Indian e-commerce" },
      { name: "Walmart+", type: "brand", stake: "100%", desc: "Membership program" },
      { name: "Walmart Health", type: "brand", stake: "100%", desc: "Health clinics" }
    ],
    keyPeople: [
      { name: "Doug McMillon", role: "CEO" },
      { name: "Walton Family", role: "~50% ownership" }
    ]
  },
  "amazon": {
    id: "amazon", name: "Amazon.com Inc.", ticker: "AMZN", cik: "0001018724",
    industry: "E-Commerce/Cloud", sector: "Technology", hq: "Seattle, WA",
    ceo: "Andy Jassy", founded: "1994", revenue: "$575B", employees: "1,500,000",
    description: "E-commerce, cloud computing, and digital services",
    subsidiaries: [
      { name: "Amazon Web Services (AWS)", type: "subsidiary", stake: "100%", desc: "Cloud computing platform" },
      { name: "Whole Foods Market", type: "subsidiary", stake: "100%", desc: "Grocery chain" },
      { name: "MGM Studios", type: "subsidiary", stake: "100%", desc: "Film and TV studio" },
      { name: "Twitch", type: "subsidiary", stake: "100%", desc: "Live streaming platform" },
      { name: "Audible", type: "subsidiary", stake: "100%", desc: "Audiobook platform" },
      { name: "Ring", type: "subsidiary", stake: "100%", desc: "Smart home security" },
      { name: "Zoox", type: "subsidiary", stake: "100%", desc: "Autonomous vehicles" },
      { name: "Kuiper Systems", type: "subsidiary", stake: "100%", desc: "Satellite internet" }
    ],
    keyPeople: [
      { name: "Andy Jassy", role: "CEO" },
      { name: "Jeff Bezos", role: "Founder, Executive Chairman" }
    ]
  },
  "apple": {
    id: "apple", name: "Apple Inc.", ticker: "AAPL", cik: "0000320193",
    industry: "Consumer Electronics", sector: "Technology", hq: "Cupertino, CA",
    ceo: "Tim Cook", founded: "1976", revenue: "$383B", employees: "164,000",
    description: "Consumer electronics, software, and services",
    subsidiaries: [
      { name: "Beats Electronics", type: "subsidiary", stake: "100%", desc: "Headphones & music streaming" },
      { name: "Shazam", type: "subsidiary", stake: "100%", desc: "Music recognition app" },
      { name: "Apple TV+", type: "brand", stake: "100%", desc: "Streaming service" },
      { name: "Apple Music", type: "brand", stake: "100%", desc: "Music streaming" },
      { name: "Apple Pay", type: "brand", stake: "100%", desc: "Payment service" },
      { name: "iCloud", type: "brand", stake: "100%", desc: "Cloud storage" }
    ],
    keyPeople: [
      { name: "Tim Cook", role: "CEO" },
      { name: "Steve Jobs", role: "Co-founder (deceased)" }
    ]
  },
  "unitedhealth": {
    id: "unitedhealth", name: "UnitedHealth Group", ticker: "UNH", cik: "0000731766",
    industry: "Healthcare", sector: "Healthcare", hq: "Minnetonka, MN",
    ceo: "Andrew Witty", founded: "1977", revenue: "$372B", employees: "440,000",
    description: "Healthcare and insurance conglomerate",
    subsidiaries: [
      { name: "UnitedHealthcare", type: "subsidiary", stake: "100%", desc: "Health insurance" },
      { name: "Optum", type: "subsidiary", stake: "100%", desc: "Health services" },
      { name: "OptumRx", type: "brand", stake: "100%", desc: "Pharmacy benefits" }
    ],
    keyPeople: [
      { name: "Andrew Witty", role: "CEO" }
    ]
  },
  "berkshire": {
    id: "berkshire", name: "Berkshire Hathaway Inc.", ticker: "BRK.B", cik: "0001067983",
    industry: "Conglomerate", sector: "Financials", hq: "Omaha, NE",
    ceo: "Warren Buffett", founded: "1839", revenue: "$364B", employees: "396,500",
    description: "Multinational conglomerate holding company",
    subsidiaries: [
      { name: "GEICO", type: "subsidiary", stake: "100%", desc: "Auto insurance" },
      { name: "BNSF Railway", type: "subsidiary", stake: "100%", desc: "Freight railroad" },
      { name: "Duracell", type: "subsidiary", stake: "100%", desc: "Batteries" },
      { name: "Dairy Queen", type: "subsidiary", stake: "100%", desc: "Fast food chain" },
      { name: "Fruit of the Loom", type: "subsidiary", stake: "100%", desc: "Apparel" },
      { name: "See's Candies", type: "subsidiary", stake: "100%", desc: "Chocolates" },
      { name: "Benjamin Moore", type: "subsidiary", stake: "100%", desc: "Paint company" },
      { name: "NetJets", type: "subsidiary", stake: "100%", desc: "Private aviation" }
    ],
    keyPeople: [
      { name: "Warren Buffett", role: "CEO & Chairman" },
      { name: "Greg Abel", role: "Vice Chairman, successor" }
    ]
  },
  "cvs": {
    id: "cvs", name: "CVS Health", ticker: "CVS", cik: "0000064803",
    industry: "Healthcare/Retail", sector: "Healthcare", hq: "Woonsocket, RI",
    ceo: "Karen Lynch", founded: "1963", revenue: "$357B", employees: "259,000",
    description: "Pharmacy and healthcare company",
    subsidiaries: [
      { name: "CVS Pharmacy", type: "subsidiary", stake: "100%", desc: "Retail pharmacy chain" },
      { name: "Aetna", type: "subsidiary", stake: "100%", desc: "Health insurance" },
      { name: "Caremark", type: "brand", stake: "100%", desc: "Pharmacy benefits manager" }
    ],
    keyPeople: [
      { name: "Karen Lynch", role: "CEO" }
    ]
  },
  "exxon": {
    id: "exxon", name: "Exxon Mobil", ticker: "XOM", cik: "0000034088",
    industry: "Oil & Gas", sector: "Energy", hq: "Irving, TX",
    ceo: "Darren Woods", founded: "1999", revenue: "$344B", employees: "62,000",
    description: "Oil and gas corporation",
    subsidiaries: [
      { name: "Mobil", type: "brand", stake: "100%", desc: "Gas stations" },
      { name: "Esso", type: "brand", stake: "100%", desc: "International gas stations" }
    ],
    keyPeople: [
      { name: "Darren Woods", role: "CEO" }
    ]
  },
  "alphabet": {
    id: "alphabet", name: "Alphabet Inc.", ticker: "GOOGL", cik: "0001652043",
    industry: "Technology", sector: "Technology", hq: "Mountain View, CA",
    ceo: "Sundar Pichai", founded: "2015", revenue: "$307B", employees: "182,000",
    description: "Parent company of Google and other subsidiaries",
    subsidiaries: [
      { name: "Google LLC", type: "subsidiary", stake: "100%", desc: "Search, advertising, cloud, Android, Chrome" },
      { name: "YouTube", type: "brand", stake: "via Google", desc: "Video sharing platform" },
      { name: "Waymo", type: "subsidiary", stake: "100%", desc: "Autonomous driving technology" },
      { name: "DeepMind", type: "subsidiary", stake: "100%", desc: "AI research lab" },
      { name: "Verily", type: "subsidiary", stake: "100%", desc: "Life sciences research" },
      { name: "Calico", type: "subsidiary", stake: "100%", desc: "Biotech - aging research" },
      { name: "Wing", type: "subsidiary", stake: "100%", desc: "Drone delivery service" },
      { name: "Fitbit", type: "brand", stake: "via Google", desc: "Wearable fitness devices" },
      { name: "Waze", type: "brand", stake: "via Google", desc: "Navigation app" },
      { name: "Nest Labs", type: "brand", stake: "via Google", desc: "Smart home devices" },
      { name: "Google Cloud", type: "brand", stake: "via Google", desc: "Cloud computing services" },
      { name: "Android", type: "brand", stake: "via Google", desc: "Mobile operating system" }
    ],
    keyPeople: [
      { name: "Sundar Pichai", role: "CEO, Alphabet & Google" },
      { name: "Larry Page", role: "Co-founder, Board" },
      { name: "Sergey Brin", role: "Co-founder, Board" }
    ]
  },
  "mckesson": {
    id: "mckesson", name: "McKesson", ticker: "MCK", cik: "0000927653",
    industry: "Pharmaceuticals", sector: "Healthcare", hq: "Irving, TX",
    ceo: "Brian Tyler", founded: "1833", revenue: "$276B", employees: "48,000",
    description: "Pharmaceutical distribution",
    subsidiaries: [],
    keyPeople: [{ name: "Brian Tyler", role: "CEO" }]
  },
  "costco": {
    id: "costco", name: "Costco", ticker: "COST", cik: "0000909832",
    industry: "Retail", sector: "Retailing", hq: "Issaquah, WA",
    ceo: "Ron Vachris", founded: "1983", revenue: "$242B", employees: "316,000",
    description: "Membership warehouse club",
    subsidiaries: [],
    keyPeople: [{ name: "Ron Vachris", role: "CEO" }]
  },
  "jpmorgan": {
    id: "jpmorgan", name: "JPMorgan Chase & Co.", ticker: "JPM", cik: "0000019617",
    industry: "Banking", sector: "Financials", hq: "New York, NY",
    ceo: "Jamie Dimon", founded: "2000", revenue: "$158B", employees: "309,000",
    description: "Largest bank in the US by assets",
    subsidiaries: [
      { name: "Chase Bank", type: "subsidiary", stake: "100%", desc: "Consumer & commercial banking" },
      { name: "J.P. Morgan Securities", type: "subsidiary", stake: "100%", desc: "Investment banking" },
      { name: "J.P. Morgan Asset Management", type: "subsidiary", stake: "100%", desc: "Asset management" }
    ],
    keyPeople: [
      { name: "Jamie Dimon", role: "CEO & Chairman" }
    ]
  },
  "microsoft": {
    id: "microsoft", name: "Microsoft Corporation", ticker: "MSFT", cik: "0000789019",
    industry: "Technology", sector: "Technology", hq: "Redmond, WA",
    ceo: "Satya Nadella", founded: "1975", revenue: "$211B", employees: "221,000",
    description: "Software, cloud, and hardware conglomerate",
    subsidiaries: [
      { name: "LinkedIn", type: "subsidiary", stake: "100%", desc: "Professional networking" },
      { name: "GitHub", type: "subsidiary", stake: "100%", desc: "Code hosting platform" },
      { name: "Nuance Communications", type: "subsidiary", stake: "100%", desc: "AI and speech recognition" },
      { name: "Activision Blizzard", type: "subsidiary", stake: "100%", desc: "Gaming company" },
      { name: "Xbox Game Studios", type: "subsidiary", stake: "100%", desc: "Game development" },
      { name: "Mojang Studios", type: "subsidiary", stake: "100%", desc: "Minecraft developer" },
      { name: "Bethesda (ZeniMax)", type: "subsidiary", stake: "100%", desc: "Game publisher" },
      { name: "Azure", type: "brand", stake: "100%", desc: "Cloud computing platform" },
      { name: "Skype", type: "brand", stake: "100%", desc: "Video calling" },
      { name: "Bing", type: "brand", stake: "100%", desc: "Search engine" },
      { name: "Surface", type: "brand", stake: "100%", desc: "Hardware devices" },
      { name: "OpenAI (investment)", type: "investment", stake: "~49%", desc: "AI research company" }
    ],
    keyPeople: [
      { name: "Satya Nadella", role: "CEO" },
      { name: "Bill Gates", role: "Co-founder, Advisor" }
    ]
  },
  "chevron": {
    id: "chevron", name: "Chevron", ticker: "CVX", cik: "0000093410",
    industry: "Oil & Gas", sector: "Energy", hq: "San Ramon, CA",
    ceo: "Mike Wirth", founded: "1879", revenue: "$200B", employees: "45,600",
    description: "Oil and gas corporation",
    subsidiaries: [],
    keyPeople: [{ name: "Mike Wirth", role: "CEO" }]
  },
  "cigna": {
    id: "cigna", name: "Cigna", ticker: "CI", cik: "0001739940",
    industry: "Healthcare", sector: "Healthcare", hq: "Bloomfield, CT",
    ceo: "David Cordani", founded: "1982", revenue: "$195B", employees: "71,000",
    description: "Health insurance and services",
    subsidiaries: [
      { name: "Express Scripts", type: "subsidiary", stake: "100%", desc: "Pharmacy benefits manager" }
    ],
    keyPeople: [{ name: "David Cordani", role: "CEO" }]
  },
  "ford": {
    id: "ford", name: "Ford Motor", ticker: "F", cik: "0000037996",
    industry: "Automotive", sector: "Motor Vehicles", hq: "Dearborn, MI",
    ceo: "Jim Farley", founded: "1903", revenue: "$176B", employees: "177,000",
    description: "Automobile manufacturer",
    subsidiaries: [
      { name: "Lincoln", type: "brand", stake: "100%", desc: "Luxury vehicles" },
      { name: "Ford Credit", type: "subsidiary", stake: "100%", desc: "Financial services" }
    ],
    keyPeople: [
      { name: "Jim Farley", role: "CEO" },
      { name: "Henry Ford", role: "Founder (deceased)" }
    ]
  },
  "bankofamerica": {
    id: "bankofamerica", name: "Bank of America", ticker: "BAC", cik: "0000070858",
    industry: "Banking", sector: "Financials", hq: "Charlotte, NC",
    ceo: "Brian Moynihan", founded: "1904", revenue: "$100B", employees: "213,000",
    description: "Major US bank",
    subsidiaries: [
      { name: "Merrill Lynch", type: "subsidiary", stake: "100%", desc: "Wealth management" }
    ],
    keyPeople: [{ name: "Brian Moynihan", role: "CEO" }]
  },
  "gm": {
    id: "gm", name: "General Motors", ticker: "GM", cik: "0001467858",
    industry: "Automotive", sector: "Motor Vehicles", hq: "Detroit, MI",
    ceo: "Mary Barra", founded: "1908", revenue: "$171B", employees: "163,000",
    description: "Automobile manufacturer",
    subsidiaries: [
      { name: "Chevrolet", type: "brand", stake: "100%", desc: "Automobiles" },
      { name: "Cadillac", type: "brand", stake: "100%", desc: "Luxury vehicles" },
      { name: "GMC", type: "brand", stake: "100%", desc: "Trucks and SUVs" },
      { name: "Buick", type: "brand", stake: "100%", desc: "Automobiles" },
      { name: "Cruise", type: "subsidiary", stake: "majority", desc: "Autonomous vehicles" }
    ],
    keyPeople: [{ name: "Mary Barra", role: "CEO" }]
  },
  "meta": {
    id: "meta", name: "Meta Platforms Inc.", ticker: "META", cik: "0001326801",
    industry: "Technology", sector: "Technology", hq: "Menlo Park, CA",
    ceo: "Mark Zuckerberg", founded: "2004", revenue: "$134B", employees: "67,000",
    description: "Social media and technology conglomerate",
    subsidiaries: [
      { name: "Facebook", type: "brand", stake: "100%", desc: "Social networking platform" },
      { name: "Instagram", type: "brand", stake: "100%", desc: "Photo and video sharing" },
      { name: "WhatsApp", type: "brand", stake: "100%", desc: "Messaging platform" },
      { name: "Oculus / Reality Labs", type: "subsidiary", stake: "100%", desc: "VR/AR hardware and software" },
      { name: "Meta Quest", type: "brand", stake: "via Oculus", desc: "VR headsets" },
      { name: "Threads", type: "brand", stake: "100%", desc: "Text-based social platform" }
    ],
    keyPeople: [
      { name: "Mark Zuckerberg", role: "CEO & Chairman" }
    ]
  },
  "verizon": {
    id: "verizon", name: "Verizon Communications", ticker: "VZ", cik: "0000732717",
    industry: "Telecommunications", sector: "Telecom", hq: "New York, NY",
    ceo: "Hans Vestberg", founded: "2000", revenue: "$134B", employees: "105,000",
    description: "Telecommunications company",
    subsidiaries: [
      { name: "Verizon Wireless", type: "subsidiary", stake: "100%", desc: "Mobile network" },
      { name: "Yahoo", type: "brand", stake: "100%", desc: "Web portal (acquired)" }
    ],
    keyPeople: [{ name: "Hans Vestberg", role: "CEO" }]
  },
  "att": {
    id: "att", name: "AT&T", ticker: "T", cik: "0000732717",
    industry: "Telecommunications", sector: "Telecom", hq: "Dallas, TX",
    ceo: "John Stankey", founded: "1983", revenue: "$122B", employees: "150,000",
    description: "Telecommunications company",
    subsidiaries: [
      { name: "AT&T Mobility", type: "subsidiary", stake: "100%", desc: "Mobile network" },
      { name: "WarnerMedia (former)", type: "brand", stake: "spun off", desc: "Media company" }
    ],
    keyPeople: [{ name: "John Stankey", role: "CEO" }]
  },
  "comcast": {
    id: "comcast", name: "Comcast", ticker: "CMCSA", cik: "0001166691",
    industry: "Media/Telecom", sector: "Telecom", hq: "Philadelphia, PA",
    ceo: "Brian Roberts", founded: "1963", revenue: "$121B", employees: "186,000",
    description: "Media and telecommunications",
    subsidiaries: [
      { name: "NBCUniversal", type: "subsidiary", stake: "100%", desc: "Media company" },
      { name: "Xfinity", type: "brand", stake: "100%", desc: "Cable and internet" },
      { name: "Sky", type: "subsidiary", stake: "100%", desc: "European media" }
    ],
    keyPeople: [{ name: "Brian Roberts", role: "CEO" }]
  },
  "wellsfargo": {
    id: "wellsfargo", name: "Wells Fargo", ticker: "WFC", cik: "0000072971",
    industry: "Banking", sector: "Financials", hq: "San Francisco, CA",
    ceo: "Charles Scharf", founded: "1852", revenue: "$82B", employees: "227,000",
    description: "Major US bank",
    subsidiaries: [],
    keyPeople: [{ name: "Charles Scharf", role: "CEO" }]
  },
  "goldmansachs": {
    id: "goldmansachs", name: "Goldman Sachs", ticker: "GS", cik: "0000886982",
    industry: "Banking", sector: "Financials", hq: "New York, NY",
    ceo: "David Solomon", founded: "1869", revenue: "$46B", employees: "45,000",
    description: "Investment bank",
    subsidiaries: [],
    keyPeople: [{ name: "David Solomon", role: "CEO" }]
  },
  "target": {
    id: "target", name: "Target", ticker: "TGT", cik: "0000027419",
    industry: "Retail", sector: "Retailing", hq: "Minneapolis, MN",
    ceo: "Brian Cornell", founded: "1902", revenue: "$107B", employees: "415,000",
    description: "Retail corporation",
    subsidiaries: [],
    keyPeople: [{ name: "Brian Cornell", role: "CEO" }]
  },
  "tesla": {
    id: "tesla", name: "Tesla", ticker: "TSLA", cik: "0001318605",
    industry: "Automotive/Energy", sector: "Motor Vehicles", hq: "Austin, TX",
    ceo: "Elon Musk", founded: "2003", revenue: "$96B", employees: "140,000",
    description: "Electric vehicles and clean energy",
    subsidiaries: [
      { name: "SolarCity", type: "subsidiary", stake: "100%", desc: "Solar energy" },
      { name: "Tesla Energy", type: "brand", stake: "100%", desc: "Energy storage" }
    ],
    keyPeople: [
      { name: "Elon Musk", role: "CEO" }
    ]
  },
  "jnj": {
    id: "jnj", name: "Johnson & Johnson", ticker: "JNJ", cik: "0000200406",
    industry: "Pharmaceuticals", sector: "Healthcare", hq: "New Brunswick, NJ",
    ceo: "Joaquin Duato", founded: "1886", revenue: "$85B", employees: "131,000",
    description: "Pharmaceutical and consumer goods",
    subsidiaries: [
      { name: "Janssen", type: "subsidiary", stake: "100%", desc: "Pharmaceuticals" }
    ],
    keyPeople: [{ name: "Joaquin Duato", role: "CEO" }]
  },
  "pfizer": {
    id: "pfizer", name: "Pfizer Inc.", ticker: "PFE", cik: "0000078003",
    industry: "Pharmaceuticals", sector: "Healthcare", hq: "New York, NY",
    ceo: "Albert Bourla", founded: "1849", revenue: "$58B", employees: "77,000",
    description: "Multinational pharmaceutical corporation",
    subsidiaries: [
      { name: "Seagen", type: "subsidiary", stake: "100%", desc: "Antibody-drug conjugates" },
      { name: "Pfizer Oncology", type: "brand", stake: "100%", desc: "Cancer treatments" },
      { name: "Pfizer Vaccines", type: "brand", stake: "100%", desc: "Vaccine division" }
    ],
    keyPeople: [{ name: "Albert Bourla", role: "CEO & Chairman" }]
  },
  "disney": {
    id: "disney", name: "The Walt Disney Company", ticker: "DIS", cik: "0001001039",
    industry: "Entertainment", sector: "Media", hq: "Burbank, CA",
    ceo: "Bob Iger", founded: "1923", revenue: "$89B", employees: "220,000",
    description: "Entertainment and media conglomerate",
    subsidiaries: [
      { name: "Marvel Entertainment", type: "subsidiary", stake: "100%", desc: "Comic books & superhero films" },
      { name: "Lucasfilm", type: "subsidiary", stake: "100%", desc: "Star Wars franchise" },
      { name: "Pixar", type: "subsidiary", stake: "100%", desc: "Animation studio" },
      { name: "20th Century Studios", type: "subsidiary", stake: "100%", desc: "Film studio (formerly Fox)" },
      { name: "ESPN", type: "subsidiary", stake: "80%", desc: "Sports network" },
      { name: "Hulu", type: "subsidiary", stake: "100%", desc: "Streaming service" },
      { name: "Disney+", type: "brand", stake: "100%", desc: "Streaming service" },
      { name: "National Geographic", type: "subsidiary", stake: "73%", desc: "Media & magazines" },
      { name: "ABC", type: "subsidiary", stake: "100%", desc: "Broadcast network" }
    ],
    keyPeople: [
      { name: "Bob Iger", role: "CEO" }
    ]
  },
  "dell": {
    id: "dell", name: "Dell Technologies", ticker: "DELL", cik: "0001571949",
    industry: "Technology", sector: "Technology", hq: "Round Rock, TX",
    ceo: "Michael Dell", founded: "1984", revenue: "$88B", employees: "120,000",
    description: "Computer technology",
    subsidiaries: [
      { name: "VMware (former)", type: "subsidiary", stake: "spun off", desc: "Virtualization" },
      { name: "Alienware", type: "brand", stake: "100%", desc: "Gaming computers" }
    ],
    keyPeople: [{ name: "Michael Dell", role: "Founder & CEO" }]
  },
  "pg": {
    id: "pg", name: "Procter & Gamble", ticker: "PG", cik: "0000080424",
    industry: "Consumer Goods", sector: "Consumer", hq: "Cincinnati, OH",
    ceo: "Jon Moeller", founded: "1837", revenue: "$84B", employees: "107,000",
    description: "Consumer goods corporation",
    subsidiaries: [
      { name: "Tide", type: "brand", stake: "100%", desc: "Laundry detergent" },
      { name: "Pampers", type: "brand", stake: "100%", desc: "Diapers" },
      { name: "Gillette", type: "brand", stake: "100%", desc: "Razors" },
      { name: "Crest", type: "brand", stake: "100%", desc: "Toothpaste" }
    ],
    keyPeople: [{ name: "Jon Moeller", role: "CEO" }]
  },
  "blackrock": {
    id: "blackrock", name: "BlackRock Inc.", ticker: "BLK", cik: "0001364742",
    industry: "Financial Services", sector: "Financials", hq: "New York, NY",
    ceo: "Larry Fink", founded: "1988", revenue: "$17.9B", employees: "19,800",
    description: "World's largest asset manager (~$10T AUM). Major shareholder in most S&P 500 companies.",
    subsidiaries: [
      { name: "iShares", type: "brand", stake: "100%", desc: "ETF family" },
      { name: "Aladdin", type: "brand", stake: "100%", desc: "Investment management platform" },
      { name: "BlackRock Solutions", type: "subsidiary", stake: "100%", desc: "Risk analytics & advisory" }
    ],
    keyPeople: [
      { name: "Larry Fink", role: "CEO & Chairman" }
    ],
    note: "Top-5 shareholder in Apple, Microsoft, Amazon, Google, Meta, and most major corporations"
  },
  "vanguard": {
    id: "vanguard", name: "The Vanguard Group", ticker: null, cik: null,
    industry: "Financial Services", sector: "Financials", hq: "Malvern, PA",
    ceo: "Salim Ramji", founded: "1975", revenue: "~$7B (est.)", employees: "18,600",
    description: "Second-largest asset manager (~$8.6T AUM). Unique structure: owned by its funds.",
    subsidiaries: [
      { name: "Vanguard ETFs", type: "brand", stake: "100%", desc: "Exchange-traded funds" }
    ],
    keyPeople: [
      { name: "Salim Ramji", role: "CEO" },
      { name: "John Bogle", role: "Founder (deceased)" }
    ],
    note: "Top-5 shareholder in nearly every major US corporation alongside BlackRock"
  },
  "statestreet": {
    id: "statestreet", name: "State Street Corporation", ticker: "STT", cik: "0000093679",
    industry: "Financial Services", sector: "Financials", hq: "Boston, MA",
    ceo: "Ronald O'Hanley", founded: "1792", revenue: "$11.9B", employees: "52,000",
    description: "One of the 'Big Three' index fund managers (~$4.1T AUM)",
    subsidiaries: [
      { name: "State Street Global Advisors (SSGA)", type: "subsidiary", stake: "100%", desc: "Asset management, SPDR ETFs" },
      { name: "SPDR S&P 500 ETF (SPY)", type: "brand", stake: "via SSGA", desc: "Largest ETF in the world" }
    ],
    keyPeople: [{ name: "Ronald O'Hanley", role: "CEO & Chairman" }],
    note: "Along with BlackRock and Vanguard, part of the 'Big Three' that collectively own ~20% of most S&P 500 companies"
  },
  "nvidia": {
    id: "nvidia", name: "Nvidia", ticker: "NVDA", cik: "0001045810",
    industry: "Semiconductors", sector: "Technology", hq: "Santa Clara, CA",
    ceo: "Jensen Huang", founded: "1993", revenue: "$60B", employees: "29,000",
    description: "Graphics processing units and AI chips",
    subsidiaries: [
      { name: "Mellanox", type: "subsidiary", stake: "100%", desc: "Networking" },
      { name: "Run.ai", type: "subsidiary", stake: "100%", desc: "AI workload orchestration" }
    ],
    keyPeople: [{ name: "Jensen Huang", role: "CEO & Founder" }]
  },
  "netflix": {
    id: "netflix", name: "Netflix", ticker: "NFLX", cik: "0001065280",
    industry: "Entertainment", sector: "Media", hq: "Los Gatos, CA",
    ceo: "Ted Sarandos", founded: "1997", revenue: "$33B", employees: "14,000",
    description: "Streaming entertainment service",
    subsidiaries: [],
    keyPeople: [
      { name: "Ted Sarandos", role: "Co-CEO" },
      { name: "Reed Hastings", role: "Co-founder, Executive Chairman" }
    ]
  },
  "salesforce": {
    id: "salesforce", name: "Salesforce", ticker: "CRM", cik: "0001108524",
    industry: "Technology", sector: "Technology", hq: "San Francisco, CA",
    ceo: "Marc Benioff", founded: "1999", revenue: "$35B", employees: "72,000",
    description: "Cloud-based CRM software",
    subsidiaries: [
      { name: "Slack", type: "subsidiary", stake: "100%", desc: "Business communication" },
      { name: "Tableau", type: "subsidiary", stake: "100%", desc: "Data visualization" },
      { name: "MuleSoft", type: "subsidiary", stake: "100%", desc: "Integration platform" }
    ],
    keyPeople: [{ name: "Marc Benioff", role: "CEO & Founder" }]
  },
  "oracle": {
    id: "oracle", name: "Oracle", ticker: "ORCL", cik: "0001341439",
    industry: "Technology", sector: "Technology", hq: "Austin, TX",
    ceo: "Safra Catz", founded: "1977", revenue: "$53B", employees: "164,000",
    description: "Database and cloud software",
    subsidiaries: [
      { name: "NetSuite", type: "subsidiary", stake: "100%", desc: "Cloud ERP" },
      { name: "MySQL", type: "brand", stake: "100%", desc: "Database" }
    ],
    keyPeople: [
      { name: "Safra Catz", role: "CEO" },
      { name: "Larry Ellison", role: "Co-founder, Chairman" }
    ]
  },
  "coca-cola": {
    id: "coca-cola", name: "Coca-Cola", ticker: "KO", cik: "0000021344",
    industry: "Food & Beverage", sector: "Consumer", hq: "Atlanta, GA",
    ceo: "James Quincey", founded: "1892", revenue: "$46B", employees: "79,000",
    description: "Beverage corporation",
    subsidiaries: [
      { name: "Dasani", type: "brand", stake: "100%", desc: "Bottled water" },
      { name: "Sprite", type: "brand", stake: "100%", desc: "Soft drink" },
      { name: "Fanta", type: "brand", stake: "100%", desc: "Soft drink" },
      { name: "Minute Maid", type: "brand", stake: "100%", desc: "Juices" }
    ],
    keyPeople: [{ name: "James Quincey", role: "CEO" }]
  },
  "pepsico": {
    id: "pepsico", name: "PepsiCo", ticker: "PEP", cik: "0000077476",
    industry: "Food & Beverage", sector: "Consumer", hq: "Purchase, NY",
    ceo: "Ramon Laguarta", founded: "1965", revenue: "$91B", employees: "318,000",
    description: "Food and beverage corporation",
    subsidiaries: [
      { name: "Frito-Lay", type: "subsidiary", stake: "100%", desc: "Snack foods" },
      { name: "Gatorade", type: "brand", stake: "100%", desc: "Sports drinks" },
      { name: "Quaker Oats", type: "brand", stake: "100%", desc: "Cereals and snacks" },
      { name: "Tropicana", type: "brand", stake: "sold 2021", desc: "Juices" }
    ],
    keyPeople: [{ name: "Ramon Laguarta", role: "CEO" }]
  },
  "nike": {
    id: "nike", name: "Nike", ticker: "NKE", cik: "0000320187",
    industry: "Apparel", sector: "Consumer", hq: "Beaverton, OR",
    ceo: "John Donahoe", founded: "1964", revenue: "$51B", employees: "83,000",
    description: "Athletic footwear and apparel",
    subsidiaries: [
      { name: "Converse", type: "subsidiary", stake: "100%", desc: "Footwear" },
      { name: "Jordan Brand", type: "brand", stake: "100%", desc: "Athletic footwear" }
    ],
    keyPeople: [
      { name: "John Donahoe", role: "CEO" },
      { name: "Phil Knight", role: "Co-founder, Chairman Emeritus" }
    ]
  },
  "mcdonalds": {
    id: "mcdonalds", name: "McDonald's", ticker: "MCD", cik: "0000063908",
    industry: "Restaurants", sector: "Consumer", hq: "Chicago, IL",
    ceo: "Chris Kempczinski", founded: "1955", revenue: "$25B", employees: "200,000",
    description: "Fast food corporation",
    subsidiaries: [],
    keyPeople: [{ name: "Chris Kempczinski", role: "CEO" }]
  },
  "starbucks": {
    id: "starbucks", name: "Starbucks", ticker: "SBUX", cik: "0000829224",
    industry: "Food & Beverage", sector: "Consumer", hq: "Seattle, WA",
    ceo: "Laxman Narasimhan", founded: "1971", revenue: "$36B", employees: "402,000",
    description: "Coffee company and coffeehouse chain",
    subsidiaries: [
      { name: "Teavana", type: "brand", stake: "100%", desc: "Tea" },
      { name: "Seattle's Best Coffee", type: "brand", stake: "100%", desc: "Coffee" }
    ],
    keyPeople: [{ name: "Laxman Narasimhan", role: "CEO" }]
  }
};

const PEOPLE = {
  "warren-buffett": {
    id: "warren-buffett",
    name: "Warren Buffett",
    title: "CEO & Chairman, Berkshire Hathaway",
    netWorth: "$130B",
    companies: [
      { id: "berkshire", role: "CEO & Chairman", stake: "~30%" }
    ],
    description: "Legendary investor, one of the world's wealthiest individuals"
  },
  "jeff-bezos": {
    id: "jeff-bezos",
    name: "Jeff Bezos",
    title: "Founder & Executive Chairman, Amazon",
    netWorth: "$200B",
    companies: [
      { id: "amazon", role: "Founder, Executive Chairman", stake: "~10%" }
    ],
    description: "Founded Amazon in 1994, also owns Blue Origin and Washington Post"
  },
  "elon-musk": {
    id: "elon-musk",
    name: "Elon Musk",
    title: "CEO, Tesla & SpaceX",
    netWorth: "$250B",
    companies: [
      { id: "tesla", role: "CEO", stake: "~13%" }
    ],
    description: "CEO of Tesla and SpaceX, owner of X (Twitter)"
  },
  "bill-gates": {
    id: "bill-gates",
    name: "Bill Gates",
    title: "Co-founder, Microsoft",
    netWorth: "$130B",
    companies: [
      { id: "microsoft", role: "Co-founder, Advisor", stake: "~1%" }
    ],
    description: "Co-founded Microsoft, now focused on philanthropy via Gates Foundation"
  },
  "mark-zuckerberg": {
    id: "mark-zuckerberg",
    name: "Mark Zuckerberg",
    title: "CEO & Chairman, Meta",
    netWorth: "$180B",
    companies: [
      { id: "meta", role: "CEO & Chairman", stake: "~13%" }
    ],
    description: "Founded Facebook (now Meta) in 2004"
  },
  "larry-page": {
    id: "larry-page",
    name: "Larry Page",
    title: "Co-founder, Alphabet/Google",
    netWorth: "$140B",
    companies: [
      { id: "alphabet", role: "Co-founder, Board member", stake: "~6%" }
    ],
    description: "Co-founded Google, served as CEO until 2019"
  },
  "sergey-brin": {
    id: "sergey-brin",
    name: "Sergey Brin",
    title: "Co-founder, Alphabet/Google",
    netWorth: "$135B",
    companies: [
      { id: "alphabet", role: "Co-founder, Board member", stake: "~6%" }
    ],
    description: "Co-founded Google with Larry Page"
  },
  "tim-cook": {
    id: "tim-cook",
    name: "Tim Cook",
    title: "CEO, Apple",
    netWorth: "$2B",
    companies: [
      { id: "apple", role: "CEO", stake: "~0.02%" }
    ],
    description: "CEO of Apple since 2011"
  },
  "satya-nadella": {
    id: "satya-nadella",
    name: "Satya Nadella",
    title: "CEO, Microsoft",
    netWorth: "$1.5B",
    companies: [
      { id: "microsoft", role: "CEO", stake: "~0.02%" }
    ],
    description: "CEO of Microsoft since 2014"
  },
  "sundar-pichai": {
    id: "sundar-pichai",
    name: "Sundar Pichai",
    title: "CEO, Alphabet & Google",
    netWorth: "$1B",
    companies: [
      { id: "alphabet", role: "CEO", stake: "~0.01%" }
    ],
    description: "CEO of Alphabet and Google since 2015"
  },
  "jamie-dimon": {
    id: "jamie-dimon",
    name: "Jamie Dimon",
    title: "CEO & Chairman, JPMorgan Chase",
    netWorth: "$2B",
    companies: [
      { id: "jpmorgan", role: "CEO & Chairman", stake: "~0.1%" }
    ],
    description: "CEO of JPMorgan Chase since 2005"
  },
  "larry-fink": {
    id: "larry-fink",
    name: "Larry Fink",
    title: "CEO & Chairman, BlackRock",
    netWorth: "$1B",
    companies: [
      { id: "blackrock", role: "CEO & Chairman", stake: "~0.5%" }
    ],
    description: "Founded BlackRock in 1988, manages $10T+ in assets"
  },
  "jensen-huang": {
    id: "jensen-huang",
    name: "Jensen Huang",
    title: "CEO & Founder, Nvidia",
    netWorth: "$100B",
    companies: [
      { id: "nvidia", role: "CEO & Founder", stake: "~3.5%" }
    ],
    description: "Founded Nvidia in 1993, leading AI chip revolution"
  },
  "michael-dell": {
    id: "michael-dell",
    name: "Michael Dell",
    title: "Founder & CEO, Dell Technologies",
    netWorth: "$100B",
    companies: [
      { id: "dell", role: "Founder & CEO", stake: "~50%" }
    ],
    description: "Founded Dell in 1984 at age 19"
  },
  "larry-ellison": {
    id: "larry-ellison",
    name: "Larry Ellison",
    title: "Co-founder & Chairman, Oracle",
    netWorth: "$150B",
    companies: [
      { id: "oracle", role: "Co-founder, Chairman", stake: "~40%" }
    ],
    description: "Co-founded Oracle in 1977"
  },
  "marc-benioff": {
    id: "marc-benioff",
    name: "Marc Benioff",
    title: "CEO & Founder, Salesforce",
    netWorth: "$10B",
    companies: [
      { id: "salesforce", role: "CEO & Founder", stake: "~3%" }
    ],
    description: "Founded Salesforce in 1999"
  },
  "bob-iger": {
    id: "bob-iger",
    name: "Bob Iger",
    title: "CEO, Disney",
    netWorth: "$700M",
    companies: [
      { id: "disney", role: "CEO", stake: "~0.01%" }
    ],
    description: "CEO of Disney (2005-2020, returned 2022)"
  },
  "doug-mcmillon": {
    id: "doug-mcmillon",
    name: "Doug McMillon",
    title: "CEO, Walmart",
    netWorth: "$100M",
    companies: [
      { id: "walmart", role: "CEO", stake: "~0.01%" }
    ],
    description: "CEO of Walmart since 2014"
  },
  "andy-jassy": {
    id: "andy-jassy",
    name: "Andy Jassy",
    title: "CEO, Amazon",
    netWorth: "$500M",
    companies: [
      { id: "amazon", role: "CEO", stake: "~0.02%" }
    ],
    description: "CEO of Amazon since 2021, built AWS"
  },
  "mary-barra": {
    id: "mary-barra",
    name: "Mary Barra",
    title: "CEO, General Motors",
    netWorth: "$100M",
    companies: [
      { id: "gm", role: "CEO", stake: "~0.01%" }
    ],
    description: "First female CEO of a major automaker"
  }
};
