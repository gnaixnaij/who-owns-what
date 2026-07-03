const POPULAR_SEARCHES = [
  "Walmart", "Amazon", "Apple", "Microsoft", "Alphabet", "Meta",
  "Tesla", "Berkshire Hathaway", "Nvidia", "BlackRock",
  "Elon Musk", "Warren Buffett", "Jeff Bezos", "Bill Gates"
];

let simulation = null;
let currentCompany = null;
let currentPerson = null;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("loading").classList.add("hidden");
  init();
});

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
      const person = findPerson(name);
      if (company) showCompany(company);
      else if (person) showPerson(person);
    });
    container.appendChild(tag);
  });
}

function updateStats() {
  const companies = Object.keys(COMPANIES).length;
  const people = Object.keys(PEOPLE).length;
  let subs = 0, conns = 0;
  Object.values(COMPANIES).forEach(c => {
    subs += c.subsidiaries.length;
    conns += c.subsidiaries.length + (c.keyPeople ? c.keyPeople.length : 0);
  });
  document.getElementById("stat-companies").textContent = companies;
  document.getElementById("stat-subsidiaries").textContent = subs;
  document.getElementById("stat-connections").textContent = people;
  document.querySelector(".stat:nth-child(3) label").textContent = "Key People";
}

function bindEvents() {
  const input = document.getElementById("search-input");
  const btn = document.getElementById("search-btn");
  const results = document.getElementById("search-results");

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 2) { results.classList.add("hidden"); return; }
    const matches = searchAll(q);
    renderSearchResults(matches);
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const q = input.value.trim().toLowerCase();
      const company = findCompany(q);
      const person = findPerson(q);
      if (company) { showCompany(company); results.classList.add("hidden"); input.value = ""; }
      else if (person) { showPerson(person); results.classList.add("hidden"); input.value = ""; }
    }
  });

  btn.addEventListener("click", () => {
    const q = input.value.trim().toLowerCase();
    const company = findCompany(q);
    const person = findPerson(q);
    if (company) { showCompany(company); results.classList.add("hidden"); input.value = ""; }
    else if (person) { showPerson(person); results.classList.add("hidden"); input.value = ""; }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-section")) results.classList.add("hidden");
  });

  document.getElementById("btn-back").addEventListener("click", showLanding);
  document.getElementById("btn-person-back").addEventListener("click", showLanding);
  document.getElementById("btn-reset-zoom").addEventListener("click", resetZoom);
  document.getElementById("btn-expand-all").addEventListener("click", expandAll);
  document.getElementById("btn-person-reset-zoom").addEventListener("click", resetPersonZoom);
  document.getElementById("btn-edgar").addEventListener("click", () => {
    if (currentCompany && currentCompany.cik) {
      window.open(`https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${currentCompany.cik}&type=&dateb=&owner=include&count=40`, "_blank");
    }
  });
}

function searchAll(query) {
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

  Object.values(PEOPLE).forEach(person => {
    if (person.name.toLowerCase().includes(q) ||
        person.title.toLowerCase().includes(q)) {
      results.push({ type: "person", data: person });
    }
  });

  return results.slice(0, 15);
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
      item.innerHTML = `<div class="name">🏢 ${r.data.name}</div><div class="meta">${r.data.ticker || "Private"} · ${r.data.industry}</div>`;
      item.addEventListener("click", () => { showCompany(r.data); container.classList.add("hidden"); document.getElementById("search-input").value = ""; });
    } else if (r.type === "subsidiary") {
      item.innerHTML = `<div class="name">🏢 ${r.data.name}</div><div class="meta">Subsidiary of ${r.parent.name}</div>`;
      item.addEventListener("click", () => { showCompany(r.parent); container.classList.add("hidden"); document.getElementById("search-input").value = ""; });
    } else if (r.type === "person") {
      item.innerHTML = `<div class="name">👤 ${r.data.name}</div><div class="meta">${r.data.title}</div>`;
      item.addEventListener("click", () => { showPerson(r.data); container.classList.add("hidden"); document.getElementById("search-input").value = ""; });
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

function findPerson(query) {
  const q = query.toLowerCase();
  return Object.values(PEOPLE).find(p =>
    p.name.toLowerCase().includes(q) ||
    p.id === q
  );
}

function showLanding() {
  document.getElementById("landing").classList.remove("hidden");
  document.getElementById("company-view").classList.add("hidden");
  document.getElementById("person-view").classList.add("hidden");
  currentCompany = null;
  currentPerson = null;
  if (simulation) { simulation.stop(); simulation = null; }
}

function showPerson(person) {
  currentPerson = person;
  document.getElementById("landing").classList.add("hidden");
  document.getElementById("company-view").classList.add("hidden");
  document.getElementById("person-view").classList.remove("hidden");

  document.getElementById("person-name").textContent = person.name;
  document.getElementById("person-title").textContent = person.title;
  document.getElementById("person-networth").textContent = `Net Worth: ${person.netWorth}`;
  document.getElementById("person-description").textContent = person.description;

  const connections = document.getElementById("person-connections");
  connections.innerHTML = "";
  person.companies.forEach(conn => {
    const company = COMPANIES[conn.id];
    if (company) {
      const div = document.createElement("div");
      div.className = "connection-item";
      div.innerHTML = `
        <strong>${company.name}</strong><br>
        <span class="connection-role">${conn.role}</span><br>
        <span class="connection-stake">Stake: ${conn.stake}</span>
      `;
      div.style.cursor = "pointer";
      div.addEventListener("click", () => showCompany(company));
      connections.appendChild(div);
    }
  });

  renderPersonGraph(person);
}

function renderPersonGraph(person) {
  const svg = d3.select("#person-graph-svg");
  svg.selectAll("*").remove();

  const container = document.getElementById("person-graph-container");
  const width = container.clientWidth;
  const height = container.clientHeight;

  const nodes = [];
  const links = [];

  nodes.push({ id: person.id, name: person.name, type: "person", r: 30 });

  person.companies.forEach((conn, i) => {
    const company = COMPANIES[conn.id];
    if (company) {
      const companyId = `company-${conn.id}`;
      nodes.push({ id: companyId, name: company.name, type: "parent", r: 25, companyData: company });
      links.push({ source: person.id, target: companyId, label: conn.role });

      company.subsidiaries.slice(0, 5).forEach((sub, j) => {
        const subId = `${companyId}-sub-${j}`;
        nodes.push({ id: subId, name: sub.name, type: "subsidiary", desc: sub.desc, stake: sub.stake, r: 12 });
        links.push({ source: companyId, target: subId, label: sub.stake });
      });
    }
  });

  const colorMap = { parent: "#58a6ff", subsidiary: "#3fb950", brand: "#d29922", person: "#bc8cff" };

  simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(100))
    .force("charge", d3.forceManyBody().strength(-300))
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
    .attr("fill", d => colorMap[d.type])
    .on("click", (event, d) => {
      if (d.companyData) showCompany(d.companyData);
    });

  node.append("text")
    .attr("dy", d => d.r + 14)
    .text(d => d.name.length > 20 ? d.name.substring(0, 18) + "…" : d.name)
    .style("cursor", d => d.companyData ? "pointer" : "default");

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
  })
  .on("click", (event, d) => {
    if (d.companyData) showCompany(d.companyData);
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

  window._personGraphZoom = zoom;
  window._personGraphSvg = svg;
}

function resetPersonZoom() {
  if (window._personGraphZoom && window._personGraphSvg) {
    window._personGraphSvg.transition().duration(500).call(window._personGraphZoom.transform, d3.zoomIdentity);
  }
}

function showCompany(company) {
  currentCompany = company;
  document.getElementById("landing").classList.add("hidden");
  document.getElementById("person-view").classList.add("hidden");
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
