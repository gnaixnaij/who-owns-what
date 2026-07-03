# Who Owns What?

Corporate ownership transparency — see who really controls what.

Interactive visualization of corporate ownership structures, subsidiaries, brands, and key people. Built with D3.js and SEC EDGAR data.

## Features

- **Interactive ownership graphs** — Force-directed visualization of corporate hierarchies
- **30+ major corporations** tracked with 100+ subsidiaries and brands
- **20+ key people** — CEOs, founders, and major shareholders with corporate connections
- **Search** by company name, ticker, industry, subsidiary, or person name
- **Person profiles** — See which companies a person controls and their influence network
- **SEC EDGAR integration** — Link directly to official filings
- **Dark theme** — Easy on the eyes
- **Fully static** — No backend required, runs on GitHub Pages

## Data Coverage

### Companies
| Company | Subsidiaries/Brands |
|---------|-------------------|
| Alphabet (Google) | 12 |
| Meta (Facebook) | 6 |
| Amazon | 8 |
| Microsoft | 12 |
| Berkshire Hathaway | 8 |
| BlackRock | 3 |
| Vanguard | 1 |
| JPMorgan Chase | 3 |
| Disney | 9 |
| Apple | 6 |
| Walmart | 5 |
| Tesla | 2 |
| And 20+ more... |

### Key People
- Warren Buffett (Berkshire Hathaway)
- Jeff Bezos (Amazon)
- Elon Musk (Tesla)
- Bill Gates (Microsoft)
- Mark Zuckerberg (Meta)
- Larry Page & Sergey Brin (Alphabet)
- Tim Cook (Apple)
- Satya Nadella (Microsoft)
- Jamie Dimon (JPMorgan)
- Larry Fink (BlackRock)
- Jensen Huang (Nvidia)
- And 10+ more...

## Live Demo

https://gnaixnaij.github.io/who-owns-what/

## Local Development

```bash
git clone git@github.com:gnaixnaij/who-owns-what.git
cd who-owns-what
python3 -m http.server 8000
```

Open http://localhost:8000

## Tech Stack

- **HTML/CSS/JS** — Vanilla, no frameworks
- **D3.js v7** — Force-directed graph visualization
- **SEC EDGAR API** — Corporate filings data
- **GitHub Pages** — Hosting

## Roadmap

- [ ] Expand to Fortune 500 companies
- [ ] Add more key people (board members, major shareholders)
- [ ] Political donations & lobbying data (FEC/OpenSecrets)
- [ ] Media ownership tracking
- [ ] User-contributed corrections
- [ ] Alert system for ownership changes
- [ ] Export to PDF/CSV
- [ ] API for researchers

## Contributing

Pull requests welcome. To add a new company, edit the `COMPANIES` object in `app.js`.

## License

MIT
