#!/usr/bin/env python3
"""
Fetch Fortune 500 company data from SEC EDGAR and generate companies.json
"""

import json
import time
import re
import sys
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError
from html.parser import HTMLParser

EDGAR_BASE = "https://efts.sec.gov/LATEST"
EDGAR_FILINGS = "https://data.sec.gov/submissions"
HEADERS = {
    "User-Agent": "WhoOwnsWhat/1.0 gnaixnaij@users.noreply.github.com",
    "Accept": "application/json"
}
RATE_LIMIT_DELAY = 0.12  # SEC allows 10 requests/second

# Fortune 500 2024 - Top companies with CIK numbers
FORTUNE_500 = [
    {"rank": 1, "name": "Walmart", "ticker": "WMT", "cik": "0000104169"},
    {"rank": 2, "name": "Amazon", "ticker": "AMZN", "cik": "0001018724"},
    {"rank": 3, "name": "Apple", "ticker": "AAPL", "cik": "0000320193"},
    {"rank": 4, "name": "UnitedHealth Group", "ticker": "UNH", "cik": "0000731766"},
    {"rank": 5, "name": "Berkshire Hathaway", "ticker": "BRK.B", "cik": "0001067983"},
    {"rank": 6, "name": "CVS Health", "ticker": "CVS", "cik": "0000064803"},
    {"rank": 7, "name": "Exxon Mobil", "ticker": "XOM", "cik": "0000034088"},
    {"rank": 8, "name": "Alphabet", "ticker": "GOOGL", "cik": "0001652043"},
    {"rank": 9, "name": "McKesson", "ticker": "MCK", "cik": "0000927653"},
    {"rank": 10, "name": "Cencora", "ticker": "COR", "cik": "0001140859"},
    {"rank": 11, "name": "Costco", "ticker": "COST", "cik": "0000909832"},
    {"rank": 12, "name": "JPMorgan Chase", "ticker": "JPM", "cik": "0000019617"},
    {"rank": 13, "name": "Microsoft", "ticker": "MSFT", "cik": "0000789019"},
    {"rank": 14, "name": "Cardinal Health", "ticker": "CAH", "cik": "0000721371"},
    {"rank": 15, "name": "Chevron", "ticker": "CVX", "cik": "0000093410"},
    {"rank": 16, "name": "Cigna", "ticker": "CI", "cik": "0001739940"},
    {"rank": 17, "name": "Ford Motor", "ticker": "F", "cik": "0000037996"},
    {"rank": 18, "name": "Bank of America", "ticker": "BAC", "cik": "0000070858"},
    {"rank": 19, "name": "General Motors", "ticker": "GM", "cik": "0001467858"},
    {"rank": 20, "name": "Elevance Health", "ticker": "ELV", "cik": "0001156039"},
    {"rank": 21, "name": "Citigroup", "ticker": "C", "cik": "0000831001"},
    {"rank": 22, "name": "Centene", "ticker": "CNC", "cik": "0001071739"},
    {"rank": 23, "name": "The Home Depot", "ticker": "HD", "cik": "0000354950"},
    {"rank": 24, "name": "Marathon Petroleum", "ticker": "MPC", "cik": "0001510295"},
    {"rank": 25, "name": "Kroger", "ticker": "KR", "cik": "0000056873"},
    {"rank": 26, "name": "Phillips 66", "ticker": "PSX", "cik": "0001534701"},
    {"rank": 27, "name": "Fannie Mae", "ticker": "FNMA", "cik": "0000310522"},
    {"rank": 28, "name": "Walgreens Boots Alliance", "ticker": "WBA", "cik": "0001618921"},
    {"rank": 29, "name": "Valero Energy", "ticker": "VLO", "cik": "0001035002"},
    {"rank": 30, "name": "Meta Platforms", "ticker": "META", "cik": "0001326801"},
    {"rank": 31, "name": "Verizon Communications", "ticker": "VZ", "cik": "0000732717"},
    {"rank": 32, "name": "AT&T", "ticker": "T", "cik": "0000732717"},
    {"rank": 33, "name": "Comcast", "ticker": "CMCSA", "cik": "0001166691"},
    {"rank": 34, "name": "Wells Fargo", "ticker": "WFC", "cik": "0000072971"},
    {"rank": 35, "name": "Goldman Sachs", "ticker": "GS", "cik": "0000886982"},
    {"rank": 36, "name": "Target", "ticker": "TGT", "cik": "0000027419"},
    {"rank": 37, "name": "Humana", "ticker": "HUM", "cik": "0000049071"},
    {"rank": 38, "name": "State Farm Insurance", "ticker": None, "cik": "0000093679"},
    {"rank": 39, "name": "Tesla", "ticker": "TSLA", "cik": "0001318605"},
    {"rank": 40, "name": "Morgan Stanley", "ticker": "MS", "cik": "0000895421"},
    {"rank": 41, "name": "Johnson & Johnson", "ticker": "JNJ", "cik": "0000200406"},
    {"rank": 42, "name": "Pfizer", "ticker": "PFE", "cik": "0000078003"},
    {"rank": 43, "name": "Freddie Mac", "ticker": "FMCC", "cik": "0001026214"},
    {"rank": 44, "name": "Caterpillar", "ticker": "CAT", "cik": "0000018230"},
    {"rank": 45, "name": "PepsiCo", "ticker": "PEP", "cik": "0000077476"},
    {"rank": 46, "name": "The Walt Disney Company", "ticker": "DIS", "cik": "0001001039"},
    {"rank": 47, "name": "Dell Technologies", "ticker": "DELL", "cik": "0001571949"},
    {"rank": 48, "name": "Procter & Gamble", "ticker": "PG", "cik": "0000080424"},
    {"rank": 49, "name": "Lowe's", "ticker": "LOW", "cik": "0000060667"},
    {"rank": 50, "name": "UPS", "ticker": "UPS", "cik": "0001090727"},
    {"rank": 51, "name": "Intel", "ticker": "INTC", "cik": "0000050863"},
    {"rank": 52, "name": "Energy Transfer", "ticker": "ET", "cik": "0001276187"},
    {"rank": 53, "name": "AbbVie", "ticker": "ABBV", "cik": "0001551152"},
    {"rank": 54, "name": "Merck", "ticker": "MRK", "cik": "0000310158"},
    {"rank": 55, "name": "ConocoPhillips", "ticker": "COP", "cik": "0001163165"},
    {"rank": 56, "name": "Abbott Laboratories", "ticker": "ABT", "cik": "0000001800"},
    {"rank": 57, "name": "Progressive", "ticker": "PGR", "cik": "0000080661"},
    {"rank": 58, "name": "TJX Companies", "ticker": "TJX", "cik": "0000109198"},
    {"rank": 59, "name": "American Express", "ticker": "AXP", "cik": "0000004962"},
    {"rank": 60, "name": "Publix Super Markets", "ticker": None, "cik": "0000081454"},
    {"rank": 61, "name": "Cisco Systems", "ticker": "CSCO", "cik": "0000858877"},
    {"rank": 62, "name": "Allstate", "ticker": "ALL", "cik": "0000899051"},
    {"rank": 63, "name": "Nationwide", "ticker": None, "cik": "0001080794"},
    {"rank": 64, "name": "Charter Communications", "ticker": "CHTR", "cik": "0001091667"},
    {"rank": 65, "name": "Tyson Foods", "ticker": "TSN", "cik": "0000100493"},
    {"rank": 66, "name": "Liberty Mutual", "ticker": None, "cik": "0001122976"},
    {"rank": 67, "name": "New York Life Insurance", "ticker": None, "cik": "0001022899"},
    {"rank": 68, "name": "Best Buy", "ticker": "BBY", "cik": "0000764478"},
    {"rank": 69, "name": "Bristol Myers Squibb", "ticker": "BMY", "cik": "0000014272"},
    {"rank": 70, "name": "Deere & Company", "ticker": "DE", "cik": "0000315189"},
    {"rank": 71, "name": "FedEx", "ticker": "FDX", "cik": "0001048911"},
    {"rank": 72, "name": "HCA Healthcare", "ticker": "HCA", "cik": "0000860730"},
    {"rank": 73, "name": "Nike", "ticker": "NKE", "cik": "0000320187"},
    {"rank": 74, "name": "Thermo Fisher Scientific", "ticker": "TMO", "cik": "0000097745"},
    {"rank": 75, "name": "Capital One Financial", "ticker": "COF", "cik": "0000927628"},
    {"rank": 76, "name": "Oracle", "ticker": "ORCL", "cik": "0001341439"},
    {"rank": 77, "name": "General Electric", "ticker": "GE", "cik": "0000040545"},
    {"rank": 78, "name": "Honeywell", "ticker": "HON", "cik": "0000773840"},
    {"rank": 79, "name": "Lockheed Martin", "ticker": "LMT", "cik": "0000936468"},
    {"rank": 80, "name": "3M", "ticker": "MMM", "cik": "0000066740"},
    {"rank": 81, "name": "Nvidia", "ticker": "NVDA", "cik": "0001045810"},
    {"rank": 82, "name": "Coca-Cola", "ticker": "KO", "cik": "0000021344"},
    {"rank": 83, "name": "Broadcom", "ticker": "AVGO", "cik": "0001730168"},
    {"rank": 84, "name": "T-Mobile US", "ticker": "TMUS", "cik": "0001283699"},
    {"rank": 85, "name": "American Airlines", "ticker": "AAL", "cik": "0000006201"},
    {"rank": 86, "name": "Delta Air Lines", "ticker": "DAL", "cik": "0000027904"},
    {"rank": 87, "name": "United Airlines", "ticker": "UAL", "cik": "0000100517"},
    {"rank": 88, "name": "IBM", "ticker": "IBM", "cik": "0000051143"},
    {"rank": 89, "name": "Raytheon Technologies", "ticker": "RTX", "cik": "0000102762"},
    {"rank": 90, "name": "Boeing", "ticker": "BA", "cik": "0000012927"},
    {"rank": 91, "name": "Qualcomm", "ticker": "QCOM", "cik": "0000804328"},
    {"rank": 92, "name": "Philip Morris International", "ticker": "PM", "cik": "0001413329"},
    {"rank": 93, "name": "General Dynamics", "ticker": "GD", "cik": "0000040533"},
    {"rank": 94, "name": "USAA", "ticker": None, "cik": "0001023514"},
    {"rank": 95, "name": "Performance Food Group", "ticker": "PFGC", "cik": "0001633978"},
    {"rank": 96, "name": "Sysco", "ticker": "SYY", "cik": "0000096021"},
    {"rank": 97, "name": "Salesforce", "ticker": "CRM", "cik": "0001108524"},
    {"rank": 98, "name": "Netflix", "ticker": "NFLX", "cik": "0001065280"},
    {"rank": 99, "name": "Adobe", "ticker": "ADBE", "cik": "0000796343"},
    {"rank": 100, "name": "Northrop Grumman", "ticker": "NOC", "cik": "0001133421"},
]

def fetch_edgar_company_data(cik):
    """Fetch company data from SEC EDGAR"""
    url = f"{EDGAR_FILINGS}/CIK{cik}.json"
    
    try:
        req = Request(url, headers=HEADERS)
        with urlopen(req, timeout=10) as response:
            data = json.loads(response.read().decode())
            return data
    except Exception as e:
        print(f"  Error fetching {cik}: {e}")
        return None

def extract_subsidiaries_from_filings(cik, company_name):
    """Try to extract subsidiaries from Exhibit 21 filings"""
    # This is a simplified version - real implementation would parse actual filings
    # For now, return empty list (would need to fetch and parse HTML/PDF filings)
    return []

def build_company_record(fortune_entry, edgar_data):
    """Build a complete company record"""
    if not edgar_data:
        return None
    
    company = {
        "id": fortune_entry["ticker"].lower() if fortune_entry["ticker"] else fortune_entry["name"].lower().replace(" ", "-"),
        "name": fortune_entry["name"],
        "ticker": fortune_entry["ticker"],
        "cik": fortune_entry["cik"],
        "industry": edgar_data.get("sicDescription", "Unknown"),
        "sector": "Unknown",
        "hq": f"{edgar_data.get('stateOfIncorporation', 'Unknown')}",
        "ceo": "Unknown",  # Would need to parse from DEF 14A filings
        "founded": "Unknown",
        "revenue": "Unknown",
        "employees": str(edgar_data.get("employeeCount", "Unknown")),
        "description": edgar_data.get("description", ""),
        "subsidiaries": [],
        "keyPeople": []
    }
    
    # Try to get better HQ from address
    if "addresses" in edgar_data:
        biz_addr = edgar_data["addresses"].get("business", {})
        if biz_addr:
            city = biz_addr.get("city", "")
            state = biz_addr.get("stateOrCountryDescription", "")
            if city and state:
                company["hq"] = f"{city}, {state}"
    
    return company

def main():
    print("Fetching Fortune 500 company data from SEC EDGAR...")
    print(f"Total companies to fetch: {len(FORTUNE_500)}")
    
    companies = {}
    
    for i, entry in enumerate(FORTUNE_500):
        print(f"[{i+1}/{len(FORTUNE_500)}] Fetching {entry['name']} ({entry['cik']})...")
        
        edgar_data = fetch_edgar_company_data(entry["cik"])
        
        if edgar_data:
            company = build_company_record(entry, edgar_data)
            if company:
                companies[company["id"]] = company
                print(f"  ✓ {company['name']} - {company['industry']}")
        else:
            print(f"  ✗ Failed to fetch data")
        
        # Rate limiting
        time.sleep(RATE_LIMIT_DELAY)
        
        # Progress update every 10 companies
        if (i + 1) % 10 == 0:
            print(f"\nProgress: {i+1}/{len(FORTUNE_500)} companies fetched\n")
    
    # Save to JSON
    output = {
        "metadata": {
            "source": "SEC EDGAR",
            "fetched": len(companies),
            "timestamp": time.strftime("%Y-%m-%d %H:%M:%S")
        },
        "companies": companies
    }
    
    with open("companies.json", "w") as f:
        json.dump(output, f, indent=2)
    
    print(f"\n✓ Saved {len(companies)} companies to companies.json")

if __name__ == "__main__":
    main()
