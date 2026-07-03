const COMPANIES = {};

// Load companies from JSON
fetch('companies.json')
  .then(response => response.json())
  .then(data => {
    Object.assign(COMPANIES, data.companies);
    console.log(`Loaded ${Object.keys(COMPANIES).length} companies`);
    if (typeof init === 'function') init();
  })
  .catch(error => {
    console.error('Error loading companies:', error);
    // Fallback to embedded data if JSON fails
    loadFallbackData();
  });

function loadFallbackData() {
  // Minimal fallback data if JSON fails to load
  console.warn('Using fallback data');
  if (typeof init === 'function') init();
}

const PEOPLE = {
  "warren-buffett": {
    id: "warren-buffett",
    name: "Warren Buffett",
    title: "CEO & Chairman, Berkshire Hathaway",
    netWorth: "$133B",
    companies: [
      { id: "berkshire", role: "CEO & Chairman", stake: "~30%" }
    ],
    description: "Legendary investor, one of the world's wealthiest individuals. Known as the 'Oracle of Omaha'."
  },
  "jeff-bezos": {
    id: "jeff-bezos",
    name: "Jeff Bezos",
    title: "Founder & Executive Chairman, Amazon",
    netWorth: "$205B",
    companies: [
      { id: "amazon", role: "Founder, Executive Chairman", stake: "~9.5%" }
    ],
    description: "Founded Amazon in 1994. Also owns Blue Origin (space) and The Washington Post."
  },
  "elon-musk": {
    id: "elon-musk",
    name: "Elon Musk",
    title: "CEO, Tesla & SpaceX",
    netWorth: "$245B",
    companies: [
      { id: "tesla", role: "CEO", stake: "~13%" }
    ],
    description: "CEO of Tesla and SpaceX, owner of X (formerly Twitter). World's richest person."
  },
  "bill-gates": {
    id: "bill-gates",
    name: "Bill Gates",
    title: "Co-founder, Microsoft",
    netWorth: "$130B",
    companies: [
      { id: "microsoft", role: "Co-founder, Advisor", stake: "~1.3%" }
    ],
    description: "Co-founded Microsoft in 1975. Now focused on philanthropy via Bill & Melinda Gates Foundation."
  },
  "mark-zuckerberg": {
    id: "mark-zuckerberg",
    name: "Mark Zuckerberg",
    title: "CEO & Chairman, Meta",
    netWorth: "$177B",
    companies: [
      { id: "alphabet", role: "CEO & Chairman", stake: "~13%" }
    ],
    description: "Founded Facebook (now Meta) in 2004 at age 19. Controls company through super-voting shares."
  },
  "larry-page": {
    id: "larry-page",
    name: "Larry Page",
    title: "Co-founder, Alphabet/Google",
    netWorth: "$144B",
    companies: [
      { id: "alphabet", role: "Co-founder, Board member", stake: "~5.8%" }
    ],
    description: "Co-founded Google in 1998. Served as CEO until 2019. Controls company through super-voting shares."
  },
  "sergey-brin": {
    id: "sergey-brin",
    name: "Sergey Brin",
    title: "Co-founder, Alphabet/Google",
    netWorth: "$138B",
    companies: [
      { id: "alphabet", role: "Co-founder, Board member", stake: "~5.5%" }
    ],
    description: "Co-founded Google with Larry Page in 1998. Controls company through super-voting shares."
  },
  "tim-cook": {
    id: "tim-cook",
    name: "Tim Cook",
    title: "CEO, Apple",
    netWorth: "$2.1B",
    companies: [
      { id: "apple", role: "CEO", stake: "~0.02%" }
    ],
    description: "CEO of Apple since 2011, succeeded Steve Jobs. First Fortune 500 CEO to come out as gay."
  },
  "satya-nadella": {
    id: "satya-nadella",
    name: "Satya Nadella",
    title: "CEO, Microsoft",
    netWorth: "$1.8B",
    companies: [
      { id: "microsoft", role: "CEO", stake: "~0.02%" }
    ],
    description: "CEO of Microsoft since 2014. Transformed company to cloud-first strategy."
  },
  "sundar-pichai": {
    id: "sundar-pichai",
    name: "Sundar Pichai",
    title: "CEO, Alphabet & Google",
    netWorth: "$1.2B",
    companies: [
      { id: "alphabet", role: "CEO", stake: "~0.01%" }
    ],
    description: "CEO of Alphabet and Google since 2015. Previously led Chrome, Android, and Apps divisions."
  },
  "jamie-dimon": {
    id: "jamie-dimon",
    name: "Jamie Dimon",
    title: "CEO & Chairman, JPMorgan Chase",
    netWorth: "$2.2B",
    companies: [
      { id: "jpmorgan", role: "CEO & Chairman", stake: "~0.1%" }
    ],
    description: "CEO of JPMorgan Chase since 2005. One of the most influential bankers in the world."
  },
  "larry-fink": {
    id: "larry-fink",
    name: "Larry Fink",
    title: "CEO & Chairman, BlackRock",
    netWorth: "$1.1B",
    companies: [
      { id: "blackrock", role: "CEO & Chairman", stake: "~0.5%" }
    ],
    description: "Founded BlackRock in 1988. Manages over $10 trillion in assets. Annual letter to CEOs influences corporate governance."
  },
  "jensen-huang": {
    id: "jensen-huang",
    name: "Jensen Huang",
    title: "CEO & Founder, Nvidia",
    netWorth: "$103B",
    companies: [
      { id: "nvidia", role: "CEO & Founder", stake: "~3.5%" }
    ],
    description: "Founded Nvidia in 1993. Leading the AI chip revolution. Known for signature leather jacket."
  },
  "michael-dell": {
    id: "michael-dell",
    name: "Michael Dell",
    title: "Founder & CEO, Dell Technologies",
    netWorth: "$101B",
    companies: [
      { id: "dell", role: "Founder & CEO", stake: "~50%" }
    ],
    description: "Founded Dell in 1984 at age 19 in his college dorm room. Controls company through ownership."
  },
  "larry-ellison": {
    id: "larry-ellison",
    name: "Larry Ellison",
    title: "Co-founder & Chairman, Oracle",
    netWorth: "$151B",
    companies: [
      { id: "oracle", role: "Co-founder, Chairman", stake: "~40%" }
    ],
    description: "Co-founded Oracle in 1977. Known for competitive sailing and Hawaiian island ownership."
  },
  "marc-benioff": {
    id: "marc-benioff",
    name: "Marc Benioff",
    title: "CEO & Founder, Salesforce",
    netWorth: "$10.4B",
    companies: [
      { id: "salesforce", role: "CEO & Founder", stake: "~3%" }
    ],
    description: "Founded Salesforce in 1999. Pioneer of cloud computing. Owns Time magazine."
  },
  "bob-iger": {
    id: "bob-iger",
    name: "Bob Iger",
    title: "CEO, Disney",
    netWorth: "$750M",
    companies: [
      { id: "disney", role: "CEO", stake: "~0.01%" }
    ],
    description: "CEO of Disney (2005-2020, returned 2022). Led acquisitions of Pixar, Marvel, Lucasfilm, 21st Century Fox."
  },
  "doug-mcmillon": {
    id: "doug-mcmillon",
    name: "Doug McMillon",
    title: "CEO, Walmart",
    netWorth: "$120M",
    companies: [
      { id: "walmart", role: "CEO", stake: "~0.01%" }
    ],
    description: "CEO of Walmart since 2014. Started as summer associate in 1984."
  },
  "andy-jassy": {
    id: "andy-jassy",
    name: "Andy Jassy",
    title: "CEO, Amazon",
    netWorth: "$500M",
    companies: [
      { id: "amazon", role: "CEO", stake: "~0.02%" }
    ],
    description: "CEO of Amazon since 2021. Built AWS from startup to $90B+ business."
  },
  "mary-barra": {
    id: "mary-barra",
    name: "Mary Barra",
    title: "CEO, General Motors",
    netWorth: "$110M",
    companies: [
      { id: "gm", role: "CEO", stake: "~0.01%" }
    ],
    description: "First female CEO of a major global automaker. Leading GM's electric vehicle transition."
  },
  "brian-moynihan": {
    id: "brian-moynihan",
    name: "Brian Moynihan",
    title: "CEO, Bank of America",
    netWorth: "$150M",
    companies: [
      { id: "bankofamerica", role: "CEO", stake: "~0.01%" }
    ],
    description: "CEO of Bank of America since 2010. Led company through post-2008 recovery."
  },
  "darren-woods": {
    id: "darren-woods",
    name: "Darren Woods",
    title: "CEO, Exxon Mobil",
    netWorth: "$100M",
    companies: [
      { id: "exxon", role: "CEO", stake: "~0.01%" }
    ],
    description: "CEO of Exxon Mobil since 2017. Leading energy transition strategy."
  },
  "karen-lynch": {
    id: "karen-lynch",
    name: "Karen Lynch",
    title: "CEO, CVS Health",
    netWorth: "$80M",
    companies: [
      { id: "cvs", role: "CEO", stake: "~0.01%" }
    ],
    description: "CEO of CVS Health since 2021. First woman to lead the company."
  },
  "andrew-witty": {
    id: "andrew-witty",
    name: "Andrew Witty",
    title: "CEO, UnitedHealth Group",
    netWorth: "$120M",
    companies: [
      { id: "unitedhealth", role: "CEO", stake: "~0.01%" }
    ],
    description: "CEO of UnitedHealth Group since 2021. Former CEO of GlaxoSmithKline."
  },
  "jim-farley": {
    id: "jim-farley",
    name: "Jim Farley",
    title: "CEO, Ford Motor",
    netWorth: "$90M",
    companies: [
      { id: "ford", role: "CEO", stake: "~0.01%" }
    ],
    description: "CEO of Ford since 2020. Leading electric vehicle transition with F-150 Lightning."
  }
};
