const COMPANIES = {
  "alphabet": {
    id: "alphabet",
    name: "Alphabet Inc.",
    ticker: "GOOGL",
    cik: "0001652043",
    industry: "Technology",
    ceo: "Sundar Pichai",
    hq: "Mountain View, CA",
    founded: "2015 (restructuring)",
    revenue: "$307B",
    employees: "182,000",
    description: "Parent company of Google and other subsidiaries",
    subsidiaries: [
      { name: "Google LLC", type: "subsidiary", stake: "100%", desc: "Search, advertising, cloud, Android, Chrome" },
      { name: "YouTube", type: "brand", stake: "via Google", desc: "Video sharing platform" },
      { name: "Waymo", type: "subsidiary", stake: "100%", desc: "Autonomous driving technology" },
      { name: "DeepMind", type: "subsidiary", stake: "100%", desc: "AI research lab" },
      { name: "Verily", type: "subsidiary", stake: "100%", desc: "Life sciences research" },
      { name: "Calico", type: "subsidiary", stake: "100%", desc: "Biotech - aging research" },
      { name: "Wing", type: "subsidiary", stake: "100%", desc: "Drone delivery service" },
      { name: "Sidewalk Labs", type: "subsidiary", stake: "100%", desc: "Urban innovation" },
      { name: "Fitbit", type: "brand", stake: "via Google", desc: "Wearable fitness devices" },
      { name: "Waze", type: "brand", stake: "via Google", desc: "Navigation app" },
      { name: "DoubleClick", type: "brand", stake: "via Google", desc: "Ad technology" },
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
  "meta": {
    id: "meta",
    name: "Meta Platforms Inc.",
    ticker: "META",
    cik: "0001326801",
    industry: "Technology",
    ceo: "Mark Zuckerberg",
    hq: "Menlo Park, CA",
    founded: "2004",
    revenue: "$134B",
    employees: "67,000",
    description: "Social media and technology conglomerate",
    subsidiaries: [
      { name: "Facebook", type: "brand", stake: "100%", desc: "Social networking platform" },
      { name: "Instagram", type: "brand", stake: "100%", desc: "Photo and video sharing" },
      { name: "WhatsApp", type: "brand", stake: "100%", desc: "Messaging platform" },
      { name: "Oculus / Reality Labs", type: "subsidiary", stake: "100%", desc: "VR/AR hardware and software" },
      { name: "Meta Quest", type: "brand", stake: "via Oculus", desc: "VR headsets" },
      { name: "Threads", type: "brand", stake: "100%", desc: "Text-based social platform" },
      { name: "Mapillary", type: "subsidiary", stake: "100%", desc: "Street-level imagery platform" },
      { name: "Giphy", type: "brand", stake: "100%", desc: "GIF platform" }
    ],
    keyPeople: [
      { name: "Mark Zuckerberg", role: "CEO & Chairman" },
      { name: "Sheryl Sandberg", role: "Former COO" }
    ]
  },
  "amazon": {
    id: "amazon",
    name: "Amazon.com Inc.",
    ticker: "AMZN",
    cik: "0001018724",
    industry: "Technology / Retail",
    ceo: "Andy Jassy",
    hq: "Seattle, WA",
    founded: "1994",
    revenue: "$575B",
    employees: "1,500,000",
    description: "E-commerce, cloud computing, and digital services",
    subsidiaries: [
      { name: "Amazon Web Services (AWS)", type: "subsidiary", stake: "100%", desc: "Cloud computing platform" },
      { name: "Whole Foods Market", type: "subsidiary", stake: "100%", desc: "Grocery chain" },
      { name: "MGM Studios", type: "subsidiary", stake: "100%", desc: "Film and TV studio" },
      { name: "Twitch", type: "subsidiary", stake: "100%", desc: "Live streaming platform" },
      { name: "Audible", type: "subsidiary", stake: "100%", desc: "Audiobook platform" },
      { name: "Goodreads", type: "brand", stake: "100%", desc: "Book review platform" },
      { name: "Ring", type: "subsidiary", stake: "100%", desc: "Smart home security" },
      { name: "Blink", type: "subsidiary", stake: "100%", desc: "Smart home cameras" },
      { name: "Zoox", type: "subsidiary", stake: "100%", desc: "Autonomous vehicles" },
      { name: "Kuiper Systems", type: "subsidiary", stake: "100%", desc: "Satellite internet" },
      { name: "PillPack", type: "brand", stake: "100%", desc: "Online pharmacy" },
      { name: "Woot", type: "brand", stake: "100%", desc: "Daily deals site" },
      { name: "IMDb", type: "brand", stake: "100%", desc: "Movie/TV database" },
      { name: "Amazon Prime Video", type: "brand", stake: "100%", desc: "Streaming service" }
    ],
    keyPeople: [
      { name: "Andy Jassy", role: "CEO" },
      { name: "Jeff Bezos", role: "Founder, Executive Chairman" }
    ]
  },
  "microsoft": {
    id: "microsoft",
    name: "Microsoft Corporation",
    ticker: "MSFT",
    cik: "0000789019",
    industry: "Technology",
    ceo: "Satya Nadella",
    hq: "Redmond, WA",
    founded: "1975",
    revenue: "$211B",
    employees: "221,000",
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
      { name: "Power Platform", type: "brand", stake: "100%", desc: "Low-code development" },
      { name: "OpenAI (investment)", type: "investment", stake: "~49%", desc: "AI research company" }
    ],
    keyPeople: [
      { name: "Satya Nadella", role: "CEO" },
      { name: "Bill Gates", role: "Co-founder, Advisor" }
    ]
  },
  "berkshire": {
    id: "berkshire",
    name: "Berkshire Hathaway Inc.",
    ticker: "BRK.A",
    cik: "0001067983",
    industry: "Conglomerate",
    ceo: "Warren Buffett",
    hq: "Omaha, NE",
    founded: "1839 (textile), 1965 (Buffett)",
    revenue: "$364B",
    employees: "396,500",
    description: "Multinational conglomerate holding company",
    subsidiaries: [
      { name: "GEICO", type: "subsidiary", stake: "100%", desc: "Auto insurance" },
      { name: "BNSF Railway", type: "subsidiary", stake: "100%", desc: "Freight railroad" },
      { name: "Duracell", type: "subsidiary", stake: "100%", desc: "Batteries" },
      { name: "Dairy Queen", type: "subsidiary", stake: "100%", desc: "Fast food chain" },
      { name: "Fruit of the Loom", type: "subsidiary", stake: "100%", desc: "Apparel" },
      { name: "See's Candies", type: "subsidiary", stake: "100%", desc: "Chocolates" },
      { name: "Benjamin Moore", type: "subsidiary", stake: "100%", desc: "Paint company" },
      { name: "NetJets", type: "subsidiary", stake: "100%", desc: "Private aviation" },
      { name: "Brooks Sports", type: "subsidiary", stake: "100%", desc: "Running shoes" },
      { name: "Helzberg Diamonds", type: "subsidiary", stake: "100%", desc: "Jewelry retail" },
      { name: "Oriental Trading", type: "subsidiary", stake: "100%", desc: "Party supplies" },
      { name: "Precision Castparts", type: "subsidiary", stake: "100%", desc: "Metal components" }
    ],
    keyPeople: [
      { name: "Warren Buffett", role: "CEO & Chairman" },
      { name: "Greg Abel", role: "Vice Chairman, successor" }
    ]
  },
  "blackrock": {
    id: "blackrock",
    name: "BlackRock Inc.",
    ticker: "BLK",
    cik: "0001364742",
    industry: "Financial Services",
    ceo: "Larry Fink",
    hq: "New York, NY",
    founded: "1988",
    revenue: "$17.9B",
    employees: "19,800",
    description: "World's largest asset manager (~$10T AUM). Major shareholder in most S&P 500 companies.",
    subsidiaries: [
      { name: "iShares", type: "brand", stake: "100%", desc: "ETF family" },
      { name: "Aladdin", type: "brand", stake: "100%", desc: "Investment management platform" },
      { name: "BlackRock Solutions", type: "subsidiary", stake: "100%", desc: "Risk analytics & advisory" },
      { name: "Aperio", type: "subsidiary", stake: "100%", desc: "Tax-optimized investing" },
      { name: "eFront", type: "subsidiary", stake: "100%", desc: "Private markets software" }
    ],
    keyPeople: [
      { name: "Larry Fink", role: "CEO & Chairman" }
    ],
    note: "Top-5 shareholder in Apple, Microsoft, Amazon, Google, Meta, and most major corporations"
  },
  "vanguard": {
    id: "vanguard",
    name: "The Vanguard Group",
    ticker: null,
    cik: null,
    industry: "Financial Services",
    ceo: "Salim Ramji",
    hq: "Malvern, PA",
    founded: "1975",
    revenue: "~$7B (est.)",
    employees: "18,600",
    description: "Second-largest asset manager (~$8.6T AUM). Unique structure: owned by its funds, which are owned by investors.",
    subsidiaries: [
      { name: "Vanguard ETFs", type: "brand", stake: "100%", desc: "Exchange-traded funds" },
      { name: "Vanguard Personal Advisor", type: "brand", stake: "100%", desc: "Financial advisory" }
    ],
    keyPeople: [
      { name: "Salim Ramji", role: "CEO" },
      { name: "John Bogle", role: "Founder (deceased)" }
    ],
    note: "Top-5 shareholder in nearly every major US corporation alongside BlackRock"
  },
  "jp-morgan": {
    id: "jp-morgan",
    name: "JPMorgan Chase & Co.",
    ticker: "JPM",
    cik: "0000019617",
    industry: "Financial Services",
    ceo: "Jamie Dimon",
    hq: "New York, NY",
    founded: "2000 (merger)",
    revenue: "$158B",
    employees: "309,000",
    description: "Largest bank in the US by assets",
    subsidiaries: [
      { name: "Chase Bank", type: "subsidiary", stake: "100%", desc: "Consumer & commercial banking" },
      { name: "J.P. Morgan Securities", type: "subsidiary", stake: "100%", desc: "Investment banking" },
      { name: "J.P. Morgan Asset Management", type: "subsidiary", stake: "100%", desc: "Asset management" },
      { name: "JPMorgan Payments", type: "brand", stake: "100%", desc: "Payment processing" }
    ],
    keyPeople: [
      { name: "Jamie Dimon", role: "CEO & Chairman" }
    ]
  },
  "nestle": {
    id: "nestle",
    name: "Nestlé S.A.",
    ticker: "NESN",
    cik: null,
    industry: "Consumer Goods",
    ceo: "Philipp Navratil",
    hq: "Vevey, Switzerland",
    founded: "1866",
    revenue: "$103B",
    employees: "275,000",
    description: "World's largest food and beverage company",
    subsidiaries: [
      { name: "Purina", type: "brand", stake: "100%", desc: "Pet food" },
      { name: "Nespresso", type: "brand", stake: "100%", desc: "Coffee machines & pods" },
      { name: "Nescafé", type: "brand", stake: "100%", desc: "Instant coffee" },
      { name: "KitKat", type: "brand", stake: "100%", desc: "Chocolate bar" },
      { name: "Perrier", type: "brand", stake: "100%", desc: "Mineral water" },
      { name: "San Pellegrino", type: "brand", stake: "100%", desc: "Sparkling water" },
      { name: "Gerber", type: "brand", stake: "100%", desc: "Baby food" },
      { name: "Stouffer's", type: "brand", stake: "100%", desc: "Frozen meals" },
      { name: "Boost", type: "brand", stake: "100%", desc: "Nutritional supplements" },
      { name: "Nestlé Health Science", type: "subsidiary", stake: "100%", desc: "Medical nutrition" }
    ],
    keyPeople: [
      { name: "Philipp Navratil", role: "CEO" }
    ]
  },
  "pfizer": {
    id: "pfizer",
    name: "Pfizer Inc.",
    ticker: "PFE",
    cik: "0000078003",
    industry: "Pharmaceuticals",
    ceo: "Albert Bourla",
    hq: "New York, NY",
    founded: "1849",
    revenue: "$58B",
    employees: "77,000",
    description: "Multinational pharmaceutical corporation",
    subsidiaries: [
      { name: "BioNTech (partnership)", type: "investment", stake: "partner", desc: "mRNA vaccine co-developer" },
      { name: "Seagen", type: "subsidiary", stake: "100%", desc: "Antibody-drug conjugates" },
      { name: "Pfizer Oncology", type: "brand", stake: "100%", desc: "Cancer treatments" },
      { name: "Pfizer Vaccines", type: "brand", stake: "100%", desc: "Vaccine division" },
      { name: "Hospira (acquired)", type: "subsidiary", stake: "100%", desc: "Generic injectables" }
    ],
    keyPeople: [
      { name: "Albert Bourla", role: "CEO & Chairman" }
    ]
  },
  "walmart": {
    id: "walmart",
    name: "Walmart Inc.",
    ticker: "WMT",
    cik: "0000104169",
    industry: "Retail",
    ceo: "Doug McMillon",
    hq: "Bentonville, AR",
    founded: "1962",
    revenue: "$648B",
    employees: "2,100,000",
    description: "World's largest company by revenue",
    subsidiaries: [
      { name: "Sam's Club", type: "subsidiary", stake: "100%", desc: "Membership warehouse clubs" },
      { name: "Walmart Grocery", type: "brand", stake: "100%", desc: "Grocery division" },
      { name: "Flipkart", type: "subsidiary", stake: "~77%", desc: "Indian e-commerce" },
      { name: "Jet.com", type: "brand", stake: "100%", desc: "E-commerce (absorbed)" },
      { name: "Bonobos", type: "brand", stake: "sold 2023", desc: "Men's clothing" },
      { name: "Walmart Health", type: "brand", stake: "100%", desc: "Health clinics" },
      { name: "Walmart+", type: "brand", stake: "100%", desc: "Membership program" }
    ],
    keyPeople: [
      { name: "Doug McMillon", role: "CEO" },
      { name: "Walton Family", role: "~50% ownership" }
    ]
  },
  "disney": {
    id: "disney",
    name: "The Walt Disney Company",
    ticker: "DIS",
    cik: "0001001039",
    industry: "Entertainment",
    ceo: "Bob Iger",
    hq: "Burbank, CA",
    founded: "1923",
    revenue: "$89B",
    employees: "220,000",
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
      { name: "Searchlight Pictures", type: "subsidiary", stake: "100%", desc: "Film studio" },
      { name: "ABC", type: "subsidiary", stake: "100%", desc: "Broadcast network" },
      { name: "Touchstone Pictures", type: "brand", stake: "100%", desc: "Film label (inactive)" }
    ],
    keyPeople: [
      { name: "Bob Iger", role: "CEO" }
    ]
  },
  "apple": {
    id: "apple",
    name: "Apple Inc.",
    ticker: "AAPL",
    cik: "0000320193",
    industry: "Technology",
    ceo: "Tim Cook",
    hq: "Cupertino, CA",
    founded: "1976",
    revenue: "$383B",
    employees: "164,000",
    description: "Consumer electronics, software, and services",
    subsidiaries: [
      { name: "Beats Electronics", type: "subsidiary", stake: "100%", desc: "Headphones & music streaming" },
      { name: "Shazam", type: "subsidiary", stake: "100%", desc: "Music recognition app" },
      { name: "Dark Sky (weather)", type: "subsidiary", stake: "100%", desc: "Weather app (integrated)" },
      { name: "Intel modem division", type: "subsidiary", stake: "100%", desc: "5G modem technology" },
      { name: "Apple TV+", type: "brand", stake: "100%", desc: "Streaming service" },
      { name: "Apple Music", type: "brand", stake: "100%", desc: "Music streaming" },
      { name: "Apple Pay", type: "brand", stake: "100%", desc: "Payment service" },
      { name: "iCloud", type: "brand", stake: "100%", desc: "Cloud storage" },
      { name: "FileMaker (Claris)", type: "subsidiary", stake: "100%", desc: "Database software" }
    ],
    keyPeople: [
      { name: "Tim Cook", role: "CEO" },
      { name: "Steve Jobs", role: "Co-founder (deceased)" }
    ]
  },
  "state-street": {
    id: "state-street",
    name: "State Street Corporation",
    ticker: "STT",
    cik: "0000093679",
    industry: "Financial Services",
    ceo: "Ronald O'Hanley",
    hq: "Boston, MA",
    founded: "1792",
    revenue: "$11.9B",
    employees: "52,000",
    description: "One of the 'Big Three' index fund managers (~$4.1T AUM)",
    subsidiaries: [
      { name: "State Street Global Advisors (SSGA)", type: "subsidiary", stake: "100%", desc: "Asset management, SPDR ETFs" },
      { name: "SPDR S&P 500 ETF (SPY)", type: "brand", stake: "via SSGA", desc: "Largest ETF in the world" },
      { name: "State Street Bank & Trust", type: "subsidiary", stake: "100%", desc: "Custodian bank" }
    ],
    keyPeople: [
      { name: "Ronald O'Hanley", role: "CEO & Chairman" }
    ],
    note: "Along with BlackRock and Vanguard, part of the 'Big Three' that collectively own ~20% of most S&P 500 companies"
  }
};

const POPULAR_SEARCHES = ["Alphabet", "Meta", "Amazon", "Microsoft", "BlackRock", "Disney", "Berkshire Hathaway", "Apple", "Walmart", "Vanguard"];

const EDGAR_BASE = "https://efts.sec.gov/LATEST";
const EDGAR_HEADERS = { "Accept": "application/json", "User-Agent": "WhoOwnsWhat/1.0 gnaixnaij@users.noreply.github.com" };

let simulation = null;
let currentCompany = null;

function init() {
  renderPopularTags();
  updateStats();
  bindEvents();
}

function renderPopularTags() {
  const container = document.getElementById("popular-tags");
  POPULAR_SEARCHES.forEach(name => {
    const tag = document.createElement("div");
    tag.className = "popular-tag";
    tag.textContent = name;
    tag.addEventListener("click", () => {
      const company = findCompany(name);
      if (company) showCompany(company);
    });
    container.appendChild(tag);
  });
}

function updateStats() {
  const companies = Object.keys(COMPANIES).length;
  let subs = 0, conns = 0;
  Object.values(COMPANIES).forEach(c => {
    subs += c.subsidiaries.length;
    conns += c.subsidiaries.length + (c.keyPeople ? c.keyPeople.length : 0);
  });
  document.getElementById("stat-companies").textContent = companies;
  document.getElementById("stat-subsidiaries").textContent = subs;
  document.getElementById("stat-connections").textContent = conns;
}

function bindEvents() {
  const input = document.getElementById("search-input");
  const btn = document.getElementById("search-btn");
  const results = document.getElementById("search-results");

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 2) { results.classList.add("hidden"); return; }
    const matches = searchCompanies(q);
    renderSearchResults(matches);
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const q = input.value.trim().toLowerCase();
      const company = findCompany(q);
      if (company) { showCompany(company); results.classList.add("hidden"); input.value = ""; }
    }
  });

  btn.addEventListener("click", () => {
    const q = input.value.trim().toLowerCase();
    const company = findCompany(q);
    if (company) { showCompany(company); results.classList.add("hidden"); input.value = ""; }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-section")) results.classList.add("hidden");
  });

  document.getElementById("btn-back").addEventListener("click", showLanding);
  document.getElementById("btn-reset-zoom").addEventListener("click", resetZoom);
  document.getElementById("btn-expand-all").addEventListener("click", expandAll);
  document.getElementById("btn-edgar").addEventListener("click", () => {
    if (currentCompany && currentCompany.cik) {
      window.open(`https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${currentCompany.cik}&type=&dateb=&owner=include&count=40`, "_blank");
    }
  });
}

function searchCompanies(query) {
  const q = query.toLowerCase();
  const results = [];
  Object.values(COMPANIES).forEach(company => {
    if (company.name.toLowerCase().includes(q) ||
        (company.ticker && company.ticker.toLowerCase().includes(q)) ||
        company.industry.toLowerCase().includes(q)) {
      results.push({ type: "company", data: company });
    }
    company.subsidiaries.forEach(sub => {
      if (sub.name.toLowerCase().includes(q)) {
        results.push({ type: "subsidiary", data: sub, parent: company });
      }
    });
  });
  return results.slice(0, 10);
}

function renderSearchResults(results) {
  const container = document.getElementById("search-results");
  container.innerHTML = "";
  if (results.length === 0) {
    container.innerHTML = '<div class="search-result-item"><span class="name">No results found</span></div>';
    container.classList.remove("hidden");
    return;
  }
  results.forEach(r => {
    const item = document.createElement("div");
    item.className = "search-result-item";
    if (r.type === "company") {
      item.innerHTML = `<div class="name">${r.data.name}</div><div class="meta">${r.data.ticker || ""} · ${r.data.industry}</div>`;
      item.addEventListener("click", () => { showCompany(r.data); container.classList.add("hidden"); document.getElementById("search-input").value = ""; });
    } else {
      item.innerHTML = `<div class="name">${r.data.name}</div><div class="meta">Subsidiary of ${r.parent.name}</div>`;
      item.addEventListener("click", () => { showCompany(r.parent); container.classList.add("hidden"); document.getElementById("search-input").value = ""; });
    }
    container.appendChild(item);
  });
  container.classList.remove("hidden");
}

function findCompany(query) {
  const q = query.toLowerCase();
  return Object.values(COMPANIES).find(c =>
    c.name.toLowerCase().includes(q) ||
    (c.ticker && c.ticker.toLowerCase() === q) ||
    c.id === q
  );
}

function showLanding() {
  document.getElementById("landing").classList.remove("hidden");
  document.getElementById("company-view").classList.add("hidden");
  currentCompany = null;
  if (simulation) { simulation.stop(); simulation = null; }
}

function showCompany(company) {
  currentCompany = company;
  document.getElementById("landing").classList.add("hidden");
  document.getElementById("company-view").classList.remove("hidden");

  document.getElementById("company-name").textContent = company.name;
  document.getElementById("company-ticker").textContent = company.ticker || "Private";
  document.getElementById("company-cik").textContent = company.cik ? `CIK: ${company.cik}` : "";
  document.getElementById("company-industry").textContent = company.industry;

  const facts = document.getElementById("facts-grid");
  facts.innerHTML = "";
  const factsData = [
    { label: "CEO", value: company.ceo },
    { label: "Headquarters", value: company.hq },
    { label: "Founded", value: company.founded },
    { label: "Revenue", value: company.revenue },
    { label: "Employees", value: company.employees },
    { label: "Subsidiaries", value: company.subsidiaries.length }
  ];
  factsData.forEach(f => {
    if (f.value) {
      const div = document.createElement("div");
      div.className = "fact-item";
      div.innerHTML = `<div class="fact-label">${f.label}</div><div class="fact-value">${f.value}</div>`;
      facts.appendChild(div);
    }
  });

  const summary = document.getElementById("ownership-summary");
  let summaryHTML = `<strong>${company.subsidiaries.length}</strong> subsidiaries and brands tracked.<br>`;
  if (company.note) summaryHTML += `<br><em>${company.note}</em>`;
  summary.innerHTML = summaryHTML;

  renderSubsidiaries(company);
  renderGraph(company);
}

function renderSubsidiaries(company) {
  const container = document.getElementById("subsidiaries-list");
  container.innerHTML = "";
  company.subsidiaries.forEach(sub => {
    const card = document.createElement("div");
    card.className = "subsidiary-card";
    card.innerHTML = `
      <div class="sub-name">${sub.name}</div>
      <div class="sub-type">${sub.type}</div>
      <div class="sub-desc">${sub.desc}</div>
      <div class="sub-stake">Stake: ${sub.stake}</div>
    `;
    container.appendChild(card);
  });
}

function renderGraph(company) {
  const svg = d3.select("#graph-svg");
  svg.selectAll("*").remove();

  const container = document.getElementById("graph-container");
  const width = container.clientWidth;
  const height = container.clientHeight;

  const nodes = [];
  const links = [];

  nodes.push({ id: company.id, name: company.name, type: "parent", r: 35 });

  company.subsidiaries.forEach((sub, i) => {
    const nodeId = `${company.id}-sub-${i}`;
    const nodeType = sub.type === "brand" ? "brand" : "subsidiary";
    nodes.push({ id: nodeId, name: sub.name, type: nodeType, desc: sub.desc, stake: sub.stake, r: 18 });
    links.push({ source: company.id, target: nodeId, label: sub.stake });
  });

  if (company.keyPeople) {
    company.keyPeople.forEach((person, i) => {
      const nodeId = `${company.id}-person-${i}`;
      nodes.push({ id: nodeId, name: person.name, type: "person", desc: person.role, r: 14 });
      links.push({ source: company.id, target: nodeId, label: person.role });
    });
  }

  const colorMap = { parent: "#58a6ff", subsidiary: "#3fb950", brand: "#d29922", person: "#bc8cff" };

  simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(120))
    .force("charge", d3.forceManyBody().strength(-400))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collision", d3.forceCollide().radius(d => d.r + 10));

  const g = svg.append("g");

  const zoom = d3.zoom()
    .scaleExtent([0.3, 3])
    .on("zoom", (event) => g.attr("transform", event.transform));

  svg.call(zoom);

  const link = g.selectAll(".link")
    .data(links)
    .enter().append("line")
    .attr("class", "link")
    .attr("stroke-width", 2);

  const linkLabel = g.selectAll(".link-label")
    .data(links)
    .enter().append("text")
    .attr("class", "link-label")
    .text(d => d.label);

  const node = g.selectAll(".node")
    .data(nodes)
    .enter().append("g")
    .attr("class", "node")
    .call(d3.drag()
      .on("start", dragStarted)
      .on("drag", dragged)
      .on("end", dragEnded));

  node.append("circle")
    .attr("r", d => d.r)
    .attr("fill", d => colorMap[d.type]);

  node.append("text")
    .attr("dy", d => d.r + 14)
    .text(d => d.name.length > 20 ? d.name.substring(0, 18) + "…" : d.name);

  const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  node.on("mouseover", (event, d) => {
    if (d.desc || d.stake) {
      tooltip.transition().duration(200).style("opacity", 1);
      tooltip.html(`
        <div class="tt-name">${d.name}</div>
        <div class="tt-type">${d.type}</div>
        ${d.desc ? `<div class="tt-desc">${d.desc}</div>` : ""}
        ${d.stake ? `<div class="tt-desc">Stake: ${d.stake}</div>` : ""}
      `)
      .style("left", (event.pageX + 10) + "px")
      .style("top", (event.pageY - 10) + "px");
    }
  })
  .on("mouseout", () => {
    tooltip.transition().duration(200).style("opacity", 0);
  });

  simulation.on("tick", () => {
    link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

    linkLabel
      .attr("x", d => (d.source.x + d.target.x) / 2)
      .attr("y", d => (d.source.y + d.target.y) / 2);

    node.attr("transform", d => `translate(${d.x},${d.y})`);
  });

  function dragStarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x; d.fy = d.y;
  }

  function dragged(event, d) {
    d.fx = event.x; d.fy = event.y;
  }

  function dragEnded(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null; d.fy = null;
  }

  window._graphZoom = zoom;
  window._graphSvg = svg;
  window._graphWidth = width;
  window._graphHeight = height;
}

function resetZoom() {
  if (window._graphZoom && window._graphSvg) {
    window._graphSvg.transition().duration(500).call(window._graphZoom.transform, d3.zoomIdentity);
  }
}

function expandAll() {
  if (simulation) {
    simulation.alpha(1).restart();
  }
}

document.addEventListener("DOMContentLoaded", init);
