#!/usr/bin/env python3
import json
import sys

JSON_PATH = "/home/kali/who-owns-what/companies.json"

SUBSIDIARY_DATA = {
    "aapl": [
        {"name": "Beats Electronics", "type": "subsidiary", "desc": "Premium audio brand", "stake": "100%"},
        {"name": "Shazam", "type": "subsidiary", "desc": "Music recognition app", "stake": "100%"},
        {"name": "Intel Modem Business", "type": "subsidiary", "desc": "Cellular modem division", "stake": "100%"},
    ],
    "amzn": [
        {"name": "Whole Foods Market", "type": "subsidiary", "desc": "Organic grocery chain", "stake": "100%"},
        {"name": "AWS", "type": "subsidiary", "desc": "Cloud computing platform", "stake": "100%"},
        {"name": "Twitch", "type": "subsidiary", "desc": "Live game streaming platform", "stake": "100%"},
        {"name": "IMDb", "type": "subsidiary", "desc": "Movie and TV database", "stake": "100%"},
        {"name": "Zappos", "type": "subsidiary", "desc": "Online shoe and clothing retailer", "stake": "100%"},
        {"name": "Ring", "type": "subsidiary", "desc": "Smart home security", "stake": "100%"},
        {"name": "Audible", "type": "subsidiary", "desc": "Audiobook and podcast platform", "stake": "100%"},
        {"name": "MGM", "type": "subsidiary", "desc": "Film and television studio", "stake": "100%"},
        {"name": "Zoox", "type": "subsidiary", "desc": "Self-driving car technology", "stake": "100%"},
    ],
    "googl": [
        {"name": "YouTube", "type": "subsidiary", "desc": "Video sharing platform", "stake": "100%"},
        {"name": "Waymo", "type": "subsidiary", "desc": "Self-driving car company", "stake": "100%"},
        {"name": "Verily", "type": "subsidiary", "desc": "Life sciences research", "stake": "100%"},
        {"name": "DeepMind", "type": "subsidiary", "desc": "Artificial intelligence research", "stake": "100%"},
        {"name": "Waze", "type": "subsidiary", "desc": "GPS navigation app", "stake": "100%"},
        {"name": "Fitbit", "type": "subsidiary", "desc": "Wearable fitness trackers", "stake": "100%"},
        {"name": "Nest", "type": "subsidiary", "desc": "Smart home products", "stake": "100%"},
        {"name": "Looker", "type": "subsidiary", "desc": "Data analytics platform", "stake": "100%"},
        {"name": "Mandiant", "type": "subsidiary", "desc": "Cybersecurity incident response", "stake": "100%"},
    ],
    "meta": [
        {"name": "Instagram", "type": "subsidiary", "desc": "Photo and video sharing app", "stake": "100%"},
        {"name": "WhatsApp", "type": "subsidiary", "desc": "Encrypted messaging app", "stake": "100%"},
        {"name": "Oculus", "type": "subsidiary", "desc": "Virtual reality hardware and software", "stake": "100%"},
        {"name": "Mapillary", "type": "subsidiary", "desc": "Street-level imagery platform", "stake": "100%"},
    ],
    "msft": [
        {"name": "LinkedIn", "type": "subsidiary", "desc": "Professional social network", "stake": "100%"},
        {"name": "GitHub", "type": "subsidiary", "desc": "Code hosting and collaboration", "stake": "100%"},
        {"name": "Activision Blizzard", "type": "subsidiary", "desc": "Video game publisher", "stake": "100%"},
        {"name": "Skype", "type": "subsidiary", "desc": "Video calling and messaging", "stake": "100%"},
        {"name": "Mojang", "type": "subsidiary", "desc": "Minecraft video game developer", "stake": "100%"},
        {"name": "Nuance Communications", "type": "subsidiary", "desc": "AI speech recognition", "stake": "100%"},
        {"name": "Yammer", "type": "subsidiary", "desc": "Enterprise social networking", "stake": "100%"},
    ],
    "dis": [
        {"name": "Marvel Studios", "type": "subsidiary", "desc": "Superhero film and TV production", "stake": "100%"},
        {"name": "Lucasfilm", "type": "subsidiary", "desc": "Star Wars film production", "stake": "100%"},
        {"name": "Pixar", "type": "subsidiary", "desc": "Computer animation studio", "stake": "100%"},
        {"name": "ESPN", "type": "subsidiary", "desc": "Sports broadcasting network", "stake": "80%"},
        {"name": "ABC", "type": "subsidiary", "desc": "Broadcast television network", "stake": "100%"},
        {"name": "National Geographic Partners", "type": "subsidiary", "desc": "Media and education joint venture", "stake": "73%"},
        {"name": "Hulu", "type": "subsidiary", "desc": "Streaming service", "stake": "67%"},
        {"name": "20th Century Studios", "type": "subsidiary", "desc": "Film and television studio", "stake": "100%"},
        {"name": "Searchlight Pictures", "type": "subsidiary", "desc": "Independent film distributor", "stake": "100%"},
        {"name": "A+E Networks", "type": "subsidiary", "desc": "Cable television channels", "stake": "50%"},
    ],
    "brk.b": [
        {"name": "GEICO", "type": "subsidiary", "desc": "Auto insurance company", "stake": "100%"},
        {"name": "BNSF Railway", "type": "subsidiary", "desc": "Class I freight railroad", "stake": "100%"},
        {"name": "Duracell", "type": "subsidiary", "desc": "Battery manufacturer", "stake": "100%"},
        {"name": "Dairy Queen", "type": "subsidiary", "desc": "Fast food ice cream chain", "stake": "100%"},
        {"name": "See's Candies", "type": "subsidiary", "desc": "Chocolate and candy manufacturer", "stake": "100%"},
        {"name": "Fruit of the Loom", "type": "subsidiary", "desc": "Apparel and underwear manufacturer", "stake": "100%"},
        {"name": "Precision Castparts", "type": "subsidiary", "desc": "Aerospace metal components", "stake": "100%"},
        {"name": "Lubrizol", "type": "subsidiary", "desc": "Specialty chemical company", "stake": "100%"},
        {"name": "Clayton Homes", "type": "subsidiary", "desc": "Manufactured housing builder", "stake": "100%"},
        {"name": "NetJets", "type": "subsidiary", "desc": "Fractional aircraft ownership", "stake": "100%"},
        {"name": "Benjamin Moore", "type": "subsidiary", "desc": "Paint and coatings manufacturer", "stake": "100%"},
        {"name": "FlightSafety International", "type": "subsidiary", "desc": "Aviation training", "stake": "100%"},
    ],
    "tsla": [
        {"name": "SolarCity", "type": "subsidiary", "desc": "Solar energy systems", "stake": "100%"},
        {"name": "Maxwell Technologies", "type": "subsidiary", "desc": "Ultracapacitor and battery tech", "stake": "100%"},
        {"name": "Grohmann Automation", "type": "subsidiary", "desc": "Automation engineering", "stake": "100%"},
    ],
    "wmt": [
        {"name": "Sam's Club", "type": "subsidiary", "desc": "Membership warehouse club", "stake": "100%"},
        {"name": "Flipkart", "type": "subsidiary", "desc": "Indian e-commerce platform", "stake": "77%"},
        {"name": "Walmart International", "type": "subsidiary", "desc": "Overseas retail operations", "stake": "100%"},
        {"name": "Massmart", "type": "subsidiary", "desc": "South African retail chain", "stake": "51%"},
    ],
    "nvda": [
        {"name": "Mellanox Technologies", "type": "subsidiary", "desc": "High-performance networking", "stake": "100%"},
        {"name": "Cumulus Networks", "type": "subsidiary", "desc": "Networking software", "stake": "100%"},
    ],
    "jpm": [
        {"name": "Chase", "type": "brand", "desc": "Consumer banking division", "stake": "100%"},
        {"name": "J.P. Morgan", "type": "brand", "desc": "Investment banking division", "stake": "100%"},
    ],
    "bac": [
        {"name": "Merrill Lynch", "type": "brand", "desc": "Wealth management division", "stake": "100%"},
        {"name": "Bank of America Securities", "type": "brand", "desc": "Investment banking division", "stake": "100%"},
    ],
    "wfc": [
        {"name": "Wells Fargo Securities", "type": "brand", "desc": "Investment banking division", "stake": "100%"},
        {"name": "Wells Fargo Advisors", "type": "brand", "desc": "Wealth management division", "stake": "100%"},
    ],
    "c": [
        {"name": "Citibank", "type": "brand", "desc": "Consumer banking division", "stake": "100%"},
        {"name": "Citi Global Markets", "type": "brand", "desc": "Institutional banking division", "stake": "100%"},
    ],
    "gs": [
        {"name": "Goldman Sachs Asset Management", "type": "brand", "desc": "Investment management division", "stake": "100%"},
        {"name": "Marcus", "type": "brand", "desc": "Consumer banking platform", "stake": "100%"},
    ],
    "ms": [
        {"name": "E-Trade", "type": "subsidiary", "desc": "Online brokerage platform", "stake": "100%"},
        {"name": "Morgan Stanley Wealth Management", "type": "brand", "desc": "Wealth management division", "stake": "100%"},
    ],
    "ko": [
        {"name": "Sprite", "type": "brand", "desc": "Lemon-lime soft drink", "stake": "100%"},
        {"name": "Fanta", "type": "brand", "desc": "Fruit-flavored soft drink", "stake": "100%"},
        {"name": "Minute Maid", "type": "brand", "desc": "Juice brand", "stake": "100%"},
        {"name": "Dasani", "type": "brand", "desc": "Bottled water brand", "stake": "100%"},
        {"name": "Powerade", "type": "brand", "desc": "Sports drink brand", "stake": "100%"},
    ],
    "pep": [
        {"name": "Frito-Lay", "type": "subsidiary", "desc": "Snack food division", "stake": "100%"},
        {"name": "Quaker Oats", "type": "subsidiary", "desc": "Cereal and grain products", "stake": "100%"},
        {"name": "Gatorade", "type": "brand", "desc": "Sports drink brand", "stake": "100%"},
        {"name": "Tropicana", "type": "subsidiary", "desc": "Juice brand", "stake": "100%"},
        {"name": "Mountain Dew", "type": "brand", "desc": "Citrus soft drink", "stake": "100%"},
        {"name": "Cheetos", "type": "brand", "desc": "Cheese-flavored snack", "stake": "100%"},
        {"name": "Doritos", "type": "brand", "desc": "Tortilla chip brand", "stake": "100%"},
    ],
    "cmcsa": [
        {"name": "NBCUniversal", "type": "subsidiary", "desc": "Media and entertainment conglomerate", "stake": "100%"},
        {"name": "Sky Group", "type": "subsidiary", "desc": "European media and telecom", "stake": "100%"},
        {"name": "Xfinity", "type": "brand", "desc": "Cable internet and TV service", "stake": "100%"},
    ],
    "t": [
        {"name": "AT&T Fiber", "type": "brand", "desc": "Fiber optic internet service", "stake": "100%"},
        {"name": "AT&T Wireless", "type": "brand", "desc": "Mobile network service", "stake": "100%"},
        {"name": "FirstNet", "type": "brand", "desc": "Public safety communications network", "stake": "100%"},
        {"name": "Yellow Pages", "type": "subsidiary", "desc": "Business directory", "stake": "100%"},
    ],
    "vz": [
        {"name": "Verizon Wireless", "type": "brand", "desc": "Mobile network service", "stake": "100%"},
        {"name": "Verizon Fios", "type": "brand", "desc": "Fiber optic internet and TV", "stake": "100%"},
        {"name": "TracFone Wireless", "type": "subsidiary", "desc": "Prepaid mobile provider", "stake": "100%"},
        {"name": "Yahoo", "type": "subsidiary", "desc": "Internet services and media", "stake": "100%"},
    ],
    "jnj": [
        {"name": "Janssen Pharmaceuticals", "type": "subsidiary", "desc": "Pharmaceutical division", "stake": "100%"},
        {"name": "Tylenol", "type": "brand", "desc": "Pain relief medication", "stake": "100%"},
        {"name": "Neutrogena", "type": "brand", "desc": "Skincare brand", "stake": "100%"},
        {"name": "Band-Aid", "type": "brand", "desc": "Adhesive bandages", "stake": "100%"},
        {"name": "Listerine", "type": "brand", "desc": "Mouthwash brand", "stake": "100%"},
        {"name": "Johnson's Baby", "type": "brand", "desc": "Baby care products", "stake": "100%"},
    ],
    "pg": [
        {"name": "Tide", "type": "brand", "desc": "Laundry detergent", "stake": "100%"},
        {"name": "Pampers", "type": "brand", "desc": "Diapers brand", "stake": "100%"},
        {"name": "Gillette", "type": "brand", "desc": "Shaving products", "stake": "100%"},
        {"name": "Crest", "type": "brand", "desc": "Toothpaste brand", "stake": "100%"},
        {"name": "Head & Shoulders", "type": "brand", "desc": "Anti-dandruff shampoo", "stake": "100%"},
        {"name": "Dawn", "type": "brand", "desc": "Dish soap brand", "stake": "100%"},
        {"name": "Febreze", "type": "brand", "desc": "Fabric freshener", "stake": "100%"},
        {"name": "Charmin", "type": "brand", "desc": "Toilet paper brand", "stake": "100%"},
        {"name": "Bounty", "type": "brand", "desc": "Paper towel brand", "stake": "100%"},
        {"name": "Olay", "type": "brand", "desc": "Skincare brand", "stake": "100%"},
    ],
    "cat": [
        {"name": "Solar Turbines", "type": "subsidiary", "desc": "Industrial gas turbines", "stake": "100%"},
        {"name": "Progress Rail", "type": "subsidiary", "desc": "Railway locomotives and equipment", "stake": "100%"},
        {"name": "Cat Financial", "type": "subsidiary", "desc": "Equipment financing services", "stake": "100%"},
    ],
    "f": [
        {"name": "Ford Credit", "type": "subsidiary", "desc": "Auto financing division", "stake": "100%"},
        {"name": "Lincoln", "type": "brand", "desc": "Luxury vehicle brand", "stake": "100%"},
        {"name": "Ford Performance", "type": "brand", "desc": "High-performance vehicle division", "stake": "100%"},
    ],
    "gm": [
        {"name": "Chevrolet", "type": "brand", "desc": "Mainstream vehicle brand", "stake": "100%"},
        {"name": "GMC", "type": "brand", "desc": "Truck and SUV brand", "stake": "100%"},
        {"name": "Cadillac", "type": "brand", "desc": "Luxury vehicle brand", "stake": "100%"},
        {"name": "Buick", "type": "brand", "desc": "Premium vehicle brand", "stake": "100%"},
        {"name": "Cruise", "type": "subsidiary", "desc": "Self-driving car technology", "stake": "100%"},
    ],
    "ibm": [
        {"name": "Red Hat", "type": "subsidiary", "desc": "Enterprise open-source software", "stake": "100%"},
        {"name": "IBM Cloud", "type": "brand", "desc": "Cloud computing platform", "stake": "100%"},
        {"name": "IBM Watson", "type": "brand", "desc": "AI and data platform", "stake": "100%"},
        {"name": "IBM Consulting", "type": "brand", "desc": "IT services and consulting", "stake": "100%"},
    ],
    "intc": [
        {"name": "Mobileye", "type": "subsidiary", "desc": "Self-driving car technology", "stake": "100%"},
        {"name": "Altera", "type": "subsidiary", "desc": "Programmable logic devices", "stake": "100%"},
        {"name": "Intel Arc", "type": "brand", "desc": "Discrete graphics cards", "stake": "100%"},
    ],
    "csco": [
        {"name": "Webex", "type": "brand", "desc": "Video conferencing platform", "stake": "100%"},
        {"name": "Meraki", "type": "subsidiary", "desc": "Cloud-managed networking", "stake": "100%"},
        {"name": "AppDynamics", "type": "subsidiary", "desc": "Application performance monitoring", "stake": "100%"},
        {"name": "Duo Security", "type": "subsidiary", "desc": "Multi-factor authentication", "stake": "100%"},
    ],
    "orcl": [
        {"name": "Oracle Cloud", "type": "brand", "desc": "Cloud computing services", "stake": "100%"},
        {"name": "Java", "type": "brand", "desc": "Programming language platform", "stake": "100%"},
        {"name": "MySQL", "type": "brand", "desc": "Open-source database", "stake": "100%"},
        {"name": "NetSuite", "type": "subsidiary", "desc": "Cloud ERP software", "stake": "100%"},
        {"name": "Cerner", "type": "subsidiary", "desc": "Healthcare IT solutions", "stake": "100%"},
    ],
    "qcom": [
        {"name": "Snapdragon", "type": "brand", "desc": "Mobile processor platform", "stake": "100%"},
        {"name": "Qualcomm Technologies", "type": "subsidiary", "desc": "Semiconductor R&D division", "stake": "100%"},
    ],
    "avgo": [
        {"name": "Broadcom Semiconductor", "type": "brand", "desc": "Semiconductor products division", "stake": "100%"},
        {"name": "VMware", "type": "subsidiary", "desc": "Cloud virtualization software", "stake": "100%"},
        {"name": "CA Technologies", "type": "subsidiary", "desc": "Enterprise IT management software", "stake": "100%"},
        {"name": "Symantec Enterprise", "type": "subsidiary", "desc": "Enterprise cybersecurity", "stake": "100%"},
    ],
    "unh": [
        {"name": "UnitedHealthcare", "type": "brand", "desc": "Health insurance division", "stake": "100%"},
        {"name": "Optum", "type": "subsidiary", "desc": "Health services platform", "stake": "100%"},
    ],
    "cvs": [
        {"name": "CVS Pharmacy", "type": "brand", "desc": "Retail pharmacy chain", "stake": "100%"},
        {"name": "Aetna", "type": "subsidiary", "desc": "Health insurance provider", "stake": "100%"},
        {"name": "Caremark", "type": "brand", "desc": "Pharmacy benefit management", "stake": "100%"},
    ],
    "mck": [
        {"name": "McKesson Pharmaceutical", "type": "brand", "desc": "Pharmaceutical distribution", "stake": "100%"},
        {"name": "McKesson Technology Solutions", "type": "brand", "desc": "Healthcare IT services", "stake": "100%"},
    ],
    "abt": [
        {"name": "FreeStyle Libre", "type": "brand", "desc": "Continuous glucose monitor", "stake": "100%"},
        {"name": "Abbott Nutrition", "type": "brand", "desc": "Nutritional products division", "stake": "100%"},
        {"name": "Abbott Diagnostics", "type": "brand", "desc": "Diagnostic testing division", "stake": "100%"},
    ],
    "mdt": [
        {"name": "Medtronic Cardiac", "type": "brand", "desc": "Cardiac device division", "stake": "100%"},
        {"name": "Medtronic Diabetes", "type": "brand", "desc": "Diabetes management division", "stake": "100%"},
        {"name": "Medtronic Surgical", "type": "brand", "desc": "Surgical robotics division", "stake": "100%"},
    ],
    "axp": [
        {"name": "American Express Travel", "type": "brand", "desc": "Travel services division", "stake": "100%"},
        {"name": "American Express Banking", "type": "brand", "desc": "Banking services division", "stake": "100%"},
    ],
    "hon": [
        {"name": "Honeywell Aerospace", "type": "brand", "desc": "Aerospace systems division", "stake": "100%"},
        {"name": "Honeywell Building Technologies", "type": "brand", "desc": "Building automation division", "stake": "100%"},
        {"name": "Honeywell Safety", "type": "brand", "desc": "Industrial safety division", "stake": "100%"},
        {"name": "Honeywell UOP", "type": "brand", "desc": "Petrochemical refining technology", "stake": "100%"},
    ],
    "lmt": [
        {"name": "Skunk Works", "type": "brand", "desc": "Advanced aircraft development", "stake": "100%"},
        {"name": "Lockheed Martin Space", "type": "brand", "desc": "Space systems division", "stake": "100%"},
        {"name": "Lockheed Martin Missiles", "type": "brand", "desc": "Missile and fire control", "stake": "100%"},
        {"name": "Sikorsky Aircraft", "type": "subsidiary", "desc": "Helicopter manufacturer", "stake": "100%"},
    ],
    "ba": [
        {"name": "Boeing Commercial", "type": "brand", "desc": "Commercial airplane division", "stake": "100%"},
        {"name": "Boeing Defense", "type": "brand", "desc": "Defense and space division", "stake": "100%"},
        {"name": "Boeing Global Services", "type": "brand", "desc": "Aviation services division", "stake": "100%"},
        {"name": "Jeppesen", "type": "subsidiary", "desc": "Aviation navigation data", "stake": "100%"},
    ],
    "ge": [
        {"name": "GE Aerospace", "type": "brand", "desc": "Aircraft engine division", "stake": "100%"},
        {"name": "GE HealthCare", "type": "brand", "desc": "Medical imaging division", "stake": "100%"},
        {"name": "GE Vernova", "type": "brand", "desc": "Energy and power division", "stake": "100%"},
    ],
    "rtx": [
        {"name": "Collins Aerospace", "type": "subsidiary", "desc": "Aerospace components", "stake": "100%"},
        {"name": "Pratt & Whitney", "type": "subsidiary", "desc": "Aircraft engine manufacturer", "stake": "100%"},
        {"name": "Raytheon Missiles", "type": "brand", "desc": "Missile and defense systems", "stake": "100%"},
        {"name": "Raytheon Intelligence", "type": "brand", "desc": "Intelligence and space systems", "stake": "100%"},
    ],
    "tgt": [
        {"name": "Target Circle", "type": "brand", "desc": "Loyalty program", "stake": "100%"},
        {"name": "Shipt", "type": "subsidiary", "desc": "Same-day delivery service", "stake": "100%"},
        {"name": "Target Sourcing", "type": "subsidiary", "desc": "Global sourcing operations", "stake": "100%"},
    ],
    "hd": [
        {"name": "The Home Depot Pro", "type": "brand", "desc": "Professional contractor division", "stake": "100%"},
        {"name": "Home Depot Rental", "type": "brand", "desc": "Tool and equipment rental", "stake": "100%"},
    ],
    "low": [
        {"name": "Lowe's Pro", "type": "brand", "desc": "Professional contractor division", "stake": "100%"},
        {"name": "Lowe's Supply", "type": "brand", "desc": "Lumber and building materials", "stake": "100%"},
    ],
    "ups": [
        {"name": "UPS Ground", "type": "brand", "desc": "Ground package delivery", "stake": "100%"},
        {"name": "UPS Air", "type": "brand", "desc": "Air cargo delivery", "stake": "100%"},
        {"name": "UPS Supply Chain", "type": "brand", "desc": "Logistics and freight division", "stake": "100%"},
        {"name": "UPS Healthcare", "type": "brand", "desc": "Cold chain logistics", "stake": "100%"},
    ],
    "fdx": [
        {"name": "FedEx Express", "type": "brand", "desc": "Air express delivery", "stake": "100%"},
        {"name": "FedEx Ground", "type": "brand", "desc": "Ground parcel delivery", "stake": "100%"},
        {"name": "FedEx Freight", "type": "brand", "desc": "Freight shipping", "stake": "100%"},
        {"name": "FedEx Office", "type": "brand", "desc": "Print and document services", "stake": "100%"},
    ],
    "tmus": [
        {"name": "T-Mobile Consumer", "type": "brand", "desc": "Consumer mobile service", "stake": "100%"},
        {"name": "T-Mobile Business", "type": "brand", "desc": "Business mobile service", "stake": "100%"},
        {"name": "Sprint", "type": "subsidiary", "desc": "Mobile network operator", "stake": "100%"},
    ],
    "chtr": [
        {"name": "Spectrum", "type": "brand", "desc": "Cable internet/TV/phone", "stake": "100%"},
        {"name": "Spectrum Mobile", "type": "brand", "desc": "Mobile virtual network operator", "stake": "100%"},
    ],
    "txn": [
        {"name": "TI Analog", "type": "brand", "desc": "Analog semiconductor division", "stake": "100%"},
        {"name": "TI Embedded", "type": "brand", "desc": "Embedded processor division", "stake": "100%"},
        {"name": "DLP Products", "type": "brand", "desc": "Digital light processing technology", "stake": "100%"},
    ],
    "amat": [
        {"name": "Applied Materials Semiconductor", "type": "brand", "desc": "Semiconductor equipment division", "stake": "100%"},
        {"name": "Applied Materials Display", "type": "brand", "desc": "Display manufacturing equipment", "stake": "100%"},
    ],
    "lrcx": [
        {"name": "Lam Semiconductor", "type": "brand", "desc": "Semiconductor wafer fab equipment", "stake": "100%"},
        {"name": "Lam Customer Support", "type": "brand", "desc": "Aftermarket services", "stake": "100%"},
    ],
    "klac": [
        {"name": "KLA Semiconductor", "type": "brand", "desc": "Semiconductor process control", "stake": "100%"},
        {"name": "KLA Electronics", "type": "brand", "desc": "PCB and display inspection", "stake": "100%"},
    ],
    "mu": [
        {"name": "Micron DRAM", "type": "brand", "desc": "Memory chip division", "stake": "100%"},
        {"name": "Micron NAND", "type": "brand", "desc": "Storage chip division", "stake": "100%"},
        {"name": "Micron Storage", "type": "brand", "desc": "Storage solutions division", "stake": "100%"},
    ],
    "amd": [
        {"name": "AMD Ryzen", "type": "brand", "desc": "Desktop processor line", "stake": "100%"},
        {"name": "AMD EPYC", "type": "brand", "desc": "Data center processor line", "stake": "100%"},
        {"name": "AMD Radeon", "type": "brand", "desc": "Graphics processor line", "stake": "100%"},
        {"name": "Xilinx", "type": "subsidiary", "desc": "FPGA and adaptive computing", "stake": "100%"},
    ],
    "paypal": [
        {"name": "Venmo", "type": "brand", "desc": "Peer-to-peer payment app", "stake": "100%"},
        {"name": "PayPal Checkout", "type": "brand", "desc": "Online payment processing", "stake": "100%"},
        {"name": "Braintree", "type": "subsidiary", "desc": "Payment gateway for businesses", "stake": "100%"},
    ],
    "booking-holdings": [
        {"name": "Booking.com", "type": "brand", "desc": "Online travel booking", "stake": "100%"},
        {"name": "Priceline", "type": "brand", "desc": "Discount travel booking", "stake": "100%"},
        {"name": "Kayak", "type": "brand", "desc": "Travel search engine", "stake": "100%"},
        {"name": "OpenTable", "type": "subsidiary", "desc": "Online restaurant reservations", "stake": "100%"},
    ],
    "uber": [
        {"name": "Uber Rides", "type": "brand", "desc": "Ride-hailing service", "stake": "100%"},
        {"name": "Uber Eats", "type": "brand", "desc": "Food delivery platform", "stake": "100%"},
        {"name": "Uber Freight", "type": "brand", "desc": "Trucking logistics platform", "stake": "100%"},
    ],
    "airbnb": [
        {"name": "Airbnb Homes", "type": "brand", "desc": "Home rental platform", "stake": "100%"},
        {"name": "Airbnb Experiences", "type": "brand", "desc": "Activity booking platform", "stake": "100%"},
        {"name": "Airbnb Luxe", "type": "brand", "desc": "Luxury vacation rentals", "stake": "100%"},
    ],
    "charles-schwab": [
        {"name": "Schwab Brokerage", "type": "brand", "desc": "Discount brokerage service", "stake": "100%"},
        {"name": "Schwab Bank", "type": "brand", "desc": "Banking services", "stake": "100%"},
        {"name": "TD Ameritrade", "type": "subsidiary", "desc": "Online brokerage platform", "stake": "100%"},
    ],
    "blackrock": [
        {"name": "iShares", "type": "brand", "desc": "ETF management division", "stake": "100%"},
        {"name": "BlackRock Aladdin", "type": "brand", "desc": "Risk management platform", "stake": "100%"},
        {"name": "BlackRock Active", "type": "brand", "desc": "Active investment management", "stake": "100%"},
    ],
    "blackstone": [
        {"name": "Blackstone Real Estate", "type": "brand", "desc": "Real estate investment division", "stake": "100%"},
        {"name": "Blackstone Private Equity", "type": "brand", "desc": "Private equity division", "stake": "100%"},
        {"name": "Blackstone Credit", "type": "brand", "desc": "Credit and insurance division", "stake": "100%"},
    ],
    "tjx": [
        {"name": "T.J. Maxx", "type": "brand", "desc": "Off-price department store", "stake": "100%"},
        {"name": "Marshalls", "type": "brand", "desc": "Off-price department store", "stake": "100%"},
        {"name": "HomeGoods", "type": "brand", "desc": "Home furnishing store", "stake": "100%"},
        {"name": "Sierra Trading", "type": "brand", "desc": "Off-price outdoor apparel", "stake": "100%"},
    ],
    "nke": [
        {"name": "Jordan Brand", "type": "brand", "desc": "Athletic footwear and apparel", "stake": "100%"},
        {"name": "Converse", "type": "subsidiary", "desc": "Athletic shoe brand", "stake": "100%"},
        {"name": "Hurley", "type": "subsidiary", "desc": "Surf and skate apparel", "stake": "100%"},
        {"name": "Nike ACG", "type": "brand", "desc": "Outdoor apparel line", "stake": "100%"},
    ],
    "mmm": [
        {"name": "Post-it", "type": "brand", "desc": "Adhesive note products", "stake": "100%"},
        {"name": "Scotch", "type": "brand", "desc": "Adhesive tape brand", "stake": "100%"},
        {"name": "3M Health Care", "type": "brand", "desc": "Medical products division", "stake": "100%"},
        {"name": "3M Industrial", "type": "brand", "desc": "Industrial adhesive and abrasive", "stake": "100%"},
        {"name": "Command", "type": "brand", "desc": "Damage-free hanging strips", "stake": "100%"},
    ],
    "dow-inc.": [
        {"name": "Dow Packaging", "type": "brand", "desc": "Packaging and specialty plastics", "stake": "100%"},
        {"name": "Dow Industrial", "type": "brand", "desc": "Industrial intermediates", "stake": "100%"},
        {"name": "Dow Consumer", "type": "brand", "desc": "Consumer chemicals and materials", "stake": "100%"},
    ],
    "dal": [
        {"name": "Delta Connection", "type": "brand", "desc": "Regional airline network", "stake": "100%"},
        {"name": "Delta Cargo", "type": "brand", "desc": "Air freight division", "stake": "100%"},
        {"name": "Delta Vacations", "type": "brand", "desc": "Travel package division", "stake": "100%"},
    ],
    "aal": [
        {"name": "American Eagle", "type": "brand", "desc": "Regional airline network", "stake": "100%"},
        {"name": "American Cargo", "type": "brand", "desc": "Air freight division", "stake": "100%"},
        {"name": "American Airlines Vacations", "type": "brand", "desc": "Travel package division", "stake": "100%"},
    ],
    "ual": [
        {"name": "United Express", "type": "brand", "desc": "Regional airline network", "stake": "100%"},
        {"name": "United Cargo", "type": "brand", "desc": "Air freight division", "stake": "100%"},
        {"name": "United Vacations", "type": "brand", "desc": "Travel package division", "stake": "100%"},
        {"name": "MileagePlus", "type": "brand", "desc": "Frequent flyer program", "stake": "100%"},
    ],
    "mcd": [
        {"name": "McDonald's USA", "type": "brand", "desc": "US restaurant operations", "stake": "100%"},
        {"name": "McDonald's International", "type": "brand", "desc": "International restaurant operations", "stake": "100%"},
        {"name": "McCafe", "type": "brand", "desc": "Coffee and beverage brand", "stake": "100%"},
    ],
    "yum": [
        {"name": "KFC", "type": "brand", "desc": "Fried chicken restaurant chain", "stake": "100%"},
        {"name": "Taco Bell", "type": "brand", "desc": "Mexican-style fast food chain", "stake": "100%"},
        {"name": "Pizza Hut", "type": "brand", "desc": "Pizza restaurant chain", "stake": "100%"},
        {"name": "The Habit Burger Grill", "type": "subsidiary", "desc": "Burger restaurant chain", "stake": "100%"},
    ],
    "qsr": [
        {"name": "Burger King", "type": "brand", "desc": "Fast food hamburger chain", "stake": "100%"},
        {"name": "Tim Hortons", "type": "brand", "desc": "Canadian coffee and donut chain", "stake": "100%"},
        {"name": "Popeyes", "type": "brand", "desc": "Fried chicken chain", "stake": "100%"},
        {"name": "Firehouse Subs", "type": "subsidiary", "desc": "Submarine sandwich chain", "stake": "100%"},
    ],
    "sbux": [
        {"name": "Starbucks Reserve", "type": "brand", "desc": "Premium coffee experience", "stake": "100%"},
        {"name": "Teavana", "type": "brand", "desc": "Tea brand", "stake": "100%"},
        {"name": "Seattle's Best Coffee", "type": "brand", "desc": "Coffee brand", "stake": "100%"},
    ],
    "mo": [
        {"name": "Marlboro", "type": "brand", "desc": "Cigarette brand", "stake": "100%"},
        {"name": "Copenhagen", "type": "brand", "desc": "Smokeless tobacco", "stake": "100%"},
        {"name": "Skoal", "type": "brand", "desc": "Smokeless tobacco", "stake": "100%"},
        {"name": "JUUL", "type": "brand", "desc": "E-cigarette brand", "stake": "35%"},
    ],
    "pm": [
        {"name": "Marlboro", "type": "brand", "desc": "Cigarette brand (international)", "stake": "100%"},
        {"name": "IQOS", "type": "brand", "desc": "Heated tobacco device", "stake": "100%"},
        {"name": "Zyn", "type": "brand", "desc": "Nicotine pouches", "stake": "100%"},
    ],
    "zm": [
        {"name": "Zoom Meetings", "type": "brand", "desc": "Video conferencing platform", "stake": "100%"},
        {"name": "Zoom Phone", "type": "brand", "desc": "Cloud phone system", "stake": "100%"},
        {"name": "Zoom Webinar", "type": "brand", "desc": "Webinar platform", "stake": "100%"},
    ],
}

with open(JSON_PATH, "r", encoding="utf-8") as f:
    data = json.load(f)

companies = data["companies"]
updated_count = 0
skipped_count = 0

for company_id, subs_list in SUBSIDIARY_DATA.items():
    if company_id in companies:
        companies[company_id]["subsidiaries"] = subs_list
        updated_count += 1
    else:
        print(f"SKIPPED: ID '{company_id}' not found in companies.json")
        skipped_count += 1

with open(JSON_PATH, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

total_with_subs = sum(1 for c in companies.values() if c.get("subsidiaries"))
print(f"Updated: {updated_count} companies")
print(f"Skipped (not found): {skipped_count}")
print(f"Companies with subsidiaries now: {total_with_subs}")
