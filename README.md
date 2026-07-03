# Who Owns What?

Corporate ownership transparency — see who really controls what.

Interactive visualization of corporate ownership structures, subsidiaries, brands, and key people. Built with D3.js and SEC EDGAR data.

## Features

- **Interactive ownership graphs** — Force-directed visualization of corporate hierarchies
- **14 major corporations** tracked with 100+ subsidiaries and brands
- **Search** by company name, ticker, industry, or subsidiary
- **SEC EDGAR integration** — Link directly to official filings
- **Dark theme** — Easy on the eyes
- **Fully static** — No backend required, runs on GitHub Pages

## Data Coverage

| Company | Subsidiaries/Brands |
|---------|-------------------|
| Alphabet (Google) | 14 |
| Meta (Facebook) | 8 |
| Amazon | 14 |
| Microsoft | 13 |
| Berkshire Hathaway | 12 |
| BlackRock | 5 |
| Vanguard | 2 |
| JPMorgan Chase | 4 |
| Nestlé | 10 |
| Pfizer | 5 |
| Walmart | 7 |
| Disney | 11 |
| Apple | 9 |
| State Street | 3 |

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

- [ ] Expand to 100+ corporations
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
