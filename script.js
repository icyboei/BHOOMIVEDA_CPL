const data = {
  notifications: [
    { title: 'Rain alert', desc: 'Heavy rainfall expected in 48 hours', type: 'warning', time: '1h' },
    { title: 'Price surge', desc: 'Soybean prices up 12% at Bhopal mandi', type: 'success', time: '3h' },
    { title: 'New scheme', desc: 'PM Kisan installment released', type: 'info', time: '5h' },
    { title: 'Crop advice', desc: 'Optimal sowing window starts next week', type: 'ai', time: '1d' },
  ],
  stats: [
    { icon: '🌾', label: 'Yield Increase', value: '28%', sub: 'vs last season', trend: '+6.4%', color: '#22c55e' },
    { icon: '💰', label: 'Annual Revenue', value: '₹2.8L', sub: 'estimated this year', trend: '+18%', color: '#3b82f6' },
    { icon: '💧', label: 'Water Savings', value: '18%', sub: 'drip optimization', trend: '+5%', color: '#06b6d4' },
    { icon: '🤖', label: 'AI Accuracy', value: '94%', sub: 'recommendation match', trend: 'High', color: '#8b5cf6' },
    { icon: '📈', label: 'Market Signal', value: 'Positive', sub: 'soybean up in market', trend: 'Live', color: '#f59e0b' },
    { icon: '🏆', label: 'Farmer Rank', value: '#3', sub: 'in district leaderboard', trend: 'Top 10%', color: '#ec4899' },
  ],
  activity: [
    { icon: '🌱', text: 'AI recommended Soybean for Kharif season', time: '2h ago', type: 'ai' },
    { icon: '💧', text: 'Irrigation scheduled for Field B — 6 AM tomorrow', time: '4h ago', type: 'water' },
    { icon: '📊', text: 'Market prices updated — Wheat up 8%', time: '6h ago', type: 'market' },
    { icon: '🏆', text: "You earned 'Top Farmer' badge this week!", time: '1d ago', type: 'badge' },
    { icon: '⚠️', text: 'Soil pH alert: Field A slightly acidic (5.8)', time: '1d ago', type: 'alert' },
  ],
  crops: [
    { crop: 'Soybean JS-335', icon: '🫘', color: '#2E7D32', water: 'Low', risk: 'Low', confidence: 94, hybrid: false, investment: 12500, yield: 12, unit: 'quintals', market: 4600, profit: 42700, note: 'High success in Black Cotton soil with moderate rainfall' },
    { crop: 'Wheat GW-496 (Sharbati)', icon: '🌾', color: '#FBC02D', water: 'Medium', risk: 'Low', confidence: 88, hybrid: false, investment: 10800, yield: 18, unit: 'quintals', market: 2275, profit: 30150, note: 'Reliable Rabi crop; MSP guaranteed at ₹2275/quintal' },
    { crop: 'Maize DKC-9144 (Hybrid)', icon: '🌽', color: '#FF8F00', water: 'Medium', risk: 'Medium', confidence: 76, hybrid: true, investment: 9200, yield: 16, unit: 'quintals', market: 2100, profit: 21600, note: 'Good for diverse soils and short duration cycle' },
    { crop: 'Cotton Bunny BT', icon: '🧵', color: '#1565C0', water: 'Low', risk: 'Medium', confidence: 82, hybrid: true, investment: 15400, yield: 8, unit: 'quintals', market: 7200, profit: 42000, note: 'Best for longer duration with pest monitoring' },
  ],
  schemes: [
    { id: 1, name: 'PM Kisan Samman Nidhi', ministry: 'Ministry of Agriculture', benefit: '₹6,000/year', deadline: '2025-12-31', eligible: true, category: 'Financial Aid', description: 'Direct income support of ₹6000 per year to small and marginal farmers in three equal instalments.', applied: true, link: 'https://pmkisan.gov.in/' },
    { id: 2, name: 'Pradhan Mantri Fasal Bima Yojana', ministry: 'Ministry of Agriculture', benefit: 'Crop Insurance', deadline: '2025-07-31', eligible: true, category: 'Insurance', description: 'Comprehensive crop insurance scheme providing financial support in case of crop failure due to natural calamities.', applied: false, link: 'https://pmfby.gov.in/' },
    { id: 3, name: 'Soil Health Card Scheme', ministry: 'Dept. of Agriculture', benefit: 'Free Soil Testing', deadline: 'Ongoing', eligible: true, category: 'Advisory', description: 'Free soil health cards for farmers carrying crop-wise recommendations on nutrients and fertilizers.', applied: false, link: 'https://soilhealth.dac.gov.in/' },
    { id: 4, name: 'Micro Irrigation Fund', ministry: 'NABARD', benefit: 'Up to ₹5 Lakh subsidy', deadline: '2025-09-30', eligible: false, category: 'Infrastructure', description: 'Subsidy for drip and sprinkler irrigation systems to promote efficient water use in agriculture.', applied: false, link: 'https://www.nabard.org/' },
  ],
  community: [
    { id: 1, author: 'Ramesh Kumar', avatar: 'RK', color: '#2E7D32', location: 'Vidisha, MP', time: '2h ago', content: 'Just harvested my Soybean crop using BhoomiVeda recommendations — 28% higher yield than last year! The AI suggestion to switch to JS-335 variety was spot on 🌾', likes: 142, comments: 38, shares: 24, tags: ['Soybean', 'Success'], liked: false },
    { id: 2, author: 'Priya Sharma', avatar: 'PS', color: '#1565C0', location: 'Sehore, MP', time: '5h ago', content: 'Anyone dealing with yellow mosaic virus in black gram this season? My plants are showing symptoms on 20% of field. Looking for organic treatment options before I try chemical intervention.', likes: 89, comments: 67, shares: 12, tags: ['BlackGram', 'Disease', 'Help'], liked: true },
    { id: 3, author: 'Arjun Mehta', avatar: 'AM', color: '#E65100', location: 'Hoshangabad, MP', time: '1d ago', content: 'The new soil testing feature is incredible. Got my complete micro-nutrient report in 2 days vs 2 weeks at the lab. Saved me time and ₹1500!', likes: 74, comments: 22, shares: 9, tags: ['SoilHealth', 'Feature'], liked: false },
  ],
  questions: [
    { question: 'How to increase wheat yield in black cotton soil?', expert: 'Dr. R. Sharma', answered: true, answers: 3 },
    { question: 'Organic solution for aphids in mustard crop?', expert: 'Pending', answered: false, answers: 0 },
    { question: 'Best irrigation schedule for drip in Kharif?', expert: 'Agro Expert', answered: true, answers: 5 },
  ],
  leaderboard: [
    { rank: 1, name: 'Mahesh Patel', state: 'Gujarat', points: 2840, badge: '🥇' },
    { rank: 2, name: 'Sunita Devi', state: 'Punjab', points: 2610, badge: '🥈' },
    { rank: 3, name: 'Ramesh Kumar', state: 'MP', points: 2390, badge: '🥉' },
    { rank: 4, name: 'Arjun Singh', state: 'UP', points: 2150, badge: '⭐' },
    { rank: 5, name: 'Kavita Rao', state: 'AP', points: 1980, badge: '⭐' },
  ],
  profileStats: [
    { value: '28%', label: 'Yield Increase' },
    { value: '₹2.8L', label: 'Annual Revenue' },
    { value: '18%', label: 'Water Savings' },
    { value: '94%', label: 'AI Accuracy' },
  ],
  farmDetails: [
    ['Land Size', '12 acres'],
    ['Soil Type', 'Black Cotton'],
    ['Water Source', 'Borewell + Canal'],
    ['Location', 'Vidisha, MP'],
    ['Crops Grown', 'Wheat, Soybean'],
    ['Season', 'Kharif + Rabi'],
  ],
  monthlyBars: [
    ['Jan', 42], ['Feb', 58], ['Mar', 49], ['Apr', 63], ['May', 72], ['Jun', 61], ['Jul', 78]
  ],
  seasons: ['Kharif', 'Rabi', 'Zaid'],
  cropsToChoose: ['Wheat', 'Rice', 'Soybean', 'Maize', 'Cotton', 'Mustard', 'Gram', 'Onion', 'Tomato', 'Chilli'],
  soilTypes: ['Black Soil (Regur / Black Cotton)', 'Alluvial Soil', 'Red Soil', 'Clay Soil', 'Sandy Soil'],
  climates: ['Hot', 'Moderate', 'Cold', 'Humid'],
  waterAvail: ['High', 'Medium', 'Low'],
  investment: ['Low', 'Medium', 'High'],
  labour: ['Self Labour', 'Payable Labour', 'Limited Labour', 'High Labour Availability'],
  irrigation: ['Borewell', 'Canal', 'Rainfed', 'Drip', 'Sprinkler'],
  compost: ['Available (Sufficient)', 'Limited', 'Not Available'],
  fertilizer: ['High', 'Moderate', 'Low'],
  landUnits: ['Acre', 'Hectare', 'Bigha'],
};

const state = {
  page: 'dashboard',
  dark: false,
  sidebarOpen: false,
  sidebarCollapsed: false,
  notifOpen: false,
  search: '',
  schemeCategory: 'All',
  schemeSearch: '',
  advisor: {
    state: 'Madhya Pradesh', district: '', village: '', pinCode: '', temp: '', rainfall: '850', humidity: '', season: '', floodDroughtHistory: 'None reported',
    soil: 'Black Soil (Regur / Black Cotton)', ph: '6.5', soilFertility: 'Good', nitrogen: 'Medium', phosphorus: 'Medium', potassium: 'Medium', land: '5', landUnit: 'Acre', irrigation: 'Borewell', currentCrop: 'Wheat', prevCrop: 'Soybean', compostAvailability: 'Available (Sufficient)', chemicalFertilizerAvailability: 'Moderate', budget: '75000', labourType: 'Self Labour', sellingPreference: 'Local Market',
  },
  auto: { state: true, district: true, village: true, pinCode: true, temp: true, humidity: true, rainfall: true, season: true, floodDroughtHistory: true },
  posts: data.community.map(p => ({ ...p })),
};

const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];

function init(){
  renderAll();
  bindEvents();
  updateTheme();
  updatePage();
}

function bindEvents(){
  $$('.nav-item, .profile-pill').forEach(btn => btn.addEventListener('click', () => openPage(btn.dataset.page)));
  $('#themeBtn').addEventListener('click', () => { state.dark = !state.dark; updateTheme(); });
  $('#sidebarToggle').addEventListener('click', () => { state.sidebarCollapsed = !state.sidebarCollapsed; $('#sidebar').classList.toggle('collapsed', state.sidebarCollapsed); });
  $('#mobileMenuBtn').addEventListener('click', () => toggleMobile(true));
  $('#mobileBackdrop').addEventListener('click', () => toggleMobile(false));
  $('#notifBtn').addEventListener('click', () => { state.notifOpen = !state.notifOpen; $('#notificationsPanel').hidden = !state.notifOpen; });
  $('#searchInput').addEventListener('input', (e) => { state.search = e.target.value.trim().toLowerCase(); renderAll(); });
}

function toggleMobile(open){
  state.sidebarOpen = open;
  $('#sidebar').classList.toggle('open', open);
  $('#mobileBackdrop').classList.toggle('show', open);
}

function openPage(page){
  state.page = page;
  $$('.nav-item').forEach(b => b.classList.toggle('active', b.dataset.page === page));
  $$('.page').forEach(p => p.classList.toggle('active', p.id === page));
  if (window.innerWidth <= 860) toggleMobile(false);
  updatePage();
}

function updateTheme(){
  document.body.classList.toggle('light', !state.dark);
  $('#themeBtn').textContent = state.dark ? '☾' : '☀';
}

function updatePage(){
  $('#notificationsPanel').hidden = !state.notifOpen;
  renderDashboard();
  renderAdvisor();
  renderCommunity();
  renderSchemes();
  renderProfile();
  renderNotifications();
}

function renderAll(){
  renderDashboard(); renderAdvisor(); renderCommunity(); renderSchemes(); renderProfile();
}

function heroHTML(){
  return `
    <div class="hero-banner card">
      <div class="hero-grid">
        <div>
          <div class="hero-kicker">AI Powered Agriculture Platform</div>
          <h1 class="hero-title">Welcome back, Rajendra!<br>Your farm is performing above average this season.</h1>
          <p class="hero-desc">Get AI crop recommendations, government schemes, weather updates and expert farming guidance in one place. Monitor soil health, compare market trends and make more profitable crop decisions.</p>
          <div class="hero-actions">
            <button class="btn primary" data-page="ai-crop">🤖 Get AI Advice</button>
            <button class="btn secondary" data-page="schemes">📄 View Schemes</button>
          </div>
        </div>
        <div class="hero-side">
          <div class="hero-shot"></div>
        </div>
      </div>
    </div>`;
}

function renderDashboard(){
  const container = $('#dashboard');
  const htmlStats = data.stats.map(s => `
    <div class="card stat-card">
      <div class="stat-top"><div class="stat-icon">${s.icon}</div><div class="trend">${s.trend}</div></div>
      <div class="stat-label">${s.label}</div>
      <div class="stat-value">${s.value}</div>
      <div class="stat-sub">${s.sub}</div>
    </div>`).join('');

  const recent = data.activity.filter(item => matchesSearch(item.text));
  const activityHTML = recent.map(item => `
    <div class="list-item">
      <div class="icon">${item.icon}</div>
      <div><div style="font-weight:800;margin-bottom:3px">${item.text}</div><small>${item.time}</small></div>
    </div>`).join('') || `<div class="card pad">No activity matches your search.</div>`;

  const cropHTML = data.crops.filter(c => matchesSearch(c.crop) || matchesSearch(c.note)).map(c => cropCard(c)).join('');
  const topWeather = `<div class="card pad"><div class="section-title"><div><h2>Weather & Climate</h2><p>Quick climate snapshot for the farm.</p></div><span class="pill blue">Google Weather API</span></div><div class="mini-row"><div><div class="page-title" style="font-size:2rem">31°C</div><div class="page-subtitle">Hot & clear</div></div><div class="pill green">Humidity 54%</div><div class="pill orange">Rain chance 18%</div></div><div class="chart" style="height:150px;align-items:center;gap:10px"><div class="bar" style="height:60%"><span>Temp</span><i>31°</i></div><div class="bar" style="height:42%"><span>Wind</span><i>12km/h</i></div><div class="bar" style="height:74%"><span>Humidity</span><i>54%</i></div></div></div>`;
  const soil = `<div class="card pad"><div class="section-title"><div><h2>Soil Health</h2><p>Nutrient balance at a glance.</p></div><span class="pill green">Healthy</span></div><div class="chart">${[
    ['Nitrogen',72],['Phosphorus',58],['Potassium',85],['Organic',44]
  ].map((d,i)=>`<div class="bar" style="height:${d[1]}%"><span>${d[0]}</span><i>${d[1]}%</i></div>`).join('')}</div></div>`;
  const notifications = `<div class="card pad"><div class="section-title"><div><h2>Notifications</h2><p>Important farm updates.</p></div><span class="pill green">4 new</span></div><div class="list">${data.notifications.map(n=>`<div class="list-item"><div class="icon">${n.type==='warning'?'⚠️':n.type==='success'?'📈':n.type==='ai'?'🤖':'🛈'}</div><div><div style="font-weight:800;margin-bottom:3px">${n.title}</div><small>${n.desc}</small></div></div>`).join('')}</div></div>`;
  const html = `
    ${heroHTML()}
    <div class="quick-grid">${htmlStats}</div>
    <div class="section-grid">
      <div class="card pad">
        <div class="section-title"><div><h2>Market Trends</h2><p>Crop prices over recent months.</p></div><span class="pill">Live</span></div>
        <div class="chart">${[
          ['Wheat',45],['Rice',62],['Soybean',74],['Maize',55],['Cotton',69]
        ].map((d,i)=>`<div class="bar" style="height:${d[1]}%"><span>${d[0]}</span><i>${['Jan','Feb','Mar','Apr','May'][i]}</i></div>`).join('')}</div>
      </div>
      ${topWeather}
    </div>
    <div class="section-grid three">
      <div class="card pad"><div class="section-title"><div><h2>Recent Activity</h2><p>What happened on the farm today.</p></div><span class="pill">Timeline</span></div><div class="list">${activityHTML}</div></div>
      ${soil}
      ${notifications}
    </div>
    <div class="section-grid">
      <div class="card pad"><div class="section-title"><div><h2>Best crop recommendations</h2><p>Potential crops based on the current farm profile.</p></div><span class="pill green">AI match</span></div><div class="reco-list">${cropHTML}</div></div>
      <div class="card pad"><div class="section-title"><div><h2>Quick Actions</h2><p>Frequently used tools.</p></div><span class="pill blue">Fast</span></div><div class="list"><div class="list-item"><div class="icon">🤖</div><div><div style="font-weight:800">Open AI Crop Advisor</div><small>Refine crop plan and input data.</small></div></div><div class="list-item"><div class="icon">📄</div><div><div style="font-weight:800">Check Govt Schemes</div><small>Find eligible central schemes.</small></div></div><div class="list-item"><div class="icon">👥</div><div><div style="font-weight:800">Open Community</div><small>Ask experts and share updates.</small></div></div></div></div>
    </div>`;
  container.innerHTML = html;
  $$('#dashboard [data-page]').forEach(btn => btn.addEventListener('click', () => openPage(btn.dataset.page)));
}

function cropCard(c){
  const scoreClass = c.confidence >= 90 ? 'high' : c.confidence >= 80 ? 'mid' : 'low';
  const riskPill = c.risk === 'Low' ? 'green' : c.risk === 'Medium' ? 'orange' : 'red';
  return `
    <div class="crop-card">
      <div class="crop-head">
        <div>
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap"><h3 class="crop-name">${c.icon} ${c.crop}</h3>${c.hybrid ? '<span class="pill blue">Hybrid</span>' : ''}</div>
          <div class="crop-meta">Investment ₹${c.investment.toLocaleString()} / acre · Expected profit ₹${c.profit.toLocaleString()}</div>
        </div>
        <div style="text-align:right"><div class="score ${scoreClass}">${c.confidence}%</div><div class="crop-meta">match</div></div>
      </div>
      <div class="progress"><div style="width:${c.confidence}%"></div></div>
      <div class="tag-row"><span class="tag ${riskPill}">Risk: ${c.risk}</span><span class="tag soft">💧 ${c.water}</span><span class="tag soft">${c.note}</span></div>
    </div>`;
}

function renderAdvisor(){
  const c = data; const a = state.advisor;
  const container = $('#ai-crop');
  container.innerHTML = `
    <div class="page-title">AI Crop Advisor</div>
    <p class="page-subtitle">Enter farm inputs and get crop suggestions with cost and profit hints.</p>
    <div class="ai-grid" style="margin-top:18px">
      <div class="card pad">
        <div class="section-title"><div><h2>Farm Inputs</h2><p>Auto-fetch is simulated for local demo.</p></div><span class="auto-chip">⚡ Auto fetch</span></div>
        <div class="form-grid" id="advisorForm"></div>
        <div class="section-title" style="margin-top:18px"><div></div><button class="btn primary" id="generateBtn">Generate Recommendation</button></div>
      </div>
      <div class="card pad">
        <div class="section-title"><div><h2>Recommended Crops</h2><p>Based on the current selections.</p></div><span class="pill green">AI result</span></div>
        <div id="recommendations" class="reco-list"></div>
      </div>
    </div>`;

  const form = $('#advisorForm');
  const fields = [
    ['State', 'state', 'select', ['Madhya Pradesh', 'Gujarat', 'Punjab', 'Maharashtra', 'Rajasthan', 'Uttar Pradesh', 'Bihar', 'Karnataka']],
    ['District', 'district', 'input', null, 'e.g. Vidisha'],
    ['Village', 'village', 'input', null, 'e.g. Karera'],
    ['Pin Code', 'pinCode', 'input', null, '6-digit PIN'],
    ['Temperature (°C)', 'temp', 'input', null, 'e.g. 31'],
    ['Humidity (%)', 'humidity', 'input', null, 'e.g. 54'],
    ['Rainfall (mm)', 'rainfall', 'input', null, 'e.g. 850'],
    ['Season', 'season', 'select', ['Kharif', 'Rabi', 'Zaid']],
    ['Flood/Drought History', 'floodDroughtHistory', 'select', ['None reported', 'Flood prone', 'Drought prone', 'Both']],
    ['Soil Type', 'soil', 'select', c.soilTypes],
    ['pH', 'ph', 'input', null, 'e.g. 6.5'],
    ['Soil Fertility', 'soilFertility', 'select', ['Good', 'Moderate', 'Poor']],
    ['Nitrogen', 'nitrogen', 'select', ['Very Low', 'Low', 'Medium', 'High']],
    ['Phosphorus', 'phosphorus', 'select', ['Very Low', 'Low', 'Medium', 'High']],
    ['Potassium', 'potassium', 'select', ['Very Low', 'Low', 'Medium', 'High']],
    ['Land', 'land', 'input', null, 'e.g. 5'],
    ['Land Unit', 'landUnit', 'select', c.landUnits],
    ['Irrigation', 'irrigation', 'select', c.irrigation],
    ['Current Crop', 'currentCrop', 'select', c.cropsToChoose],
    ['Previous Crop', 'prevCrop', 'select', c.cropsToChoose],
    ['Compost Availability', 'compostAvailability', 'select', c.compost],
    ['Chemical Fertilizer', 'chemicalFertilizerAvailability', 'select', c.fertilizer],
    ['Budget (₹)', 'budget', 'input', null, 'e.g. 75000'],
    ['Labour Availability', 'labourType', 'select', c.labour],
    ['Selling Preference', 'sellingPreference', 'select', ['Local Market', 'Mandi', 'Direct Retail', 'Contract Farming']],
  ];

  form.innerHTML = fields.map(([label, key, type, opts, placeholder]) => {
    const auto = ['state','district','village','pinCode','temp','humidity','rainfall','season','floodDroughtHistory'].includes(key) && state.auto[key];
    const field = type === 'select'
      ? `<select data-key="${key}">${opts.map(v => `<option ${a[key]===v ? 'selected' : ''}>${v}</option>`).join('')}</select>`
      : `<input data-key="${key}" value="${escapeHtml(a[key] || '')}" placeholder="${placeholder || ''}" ${key === 'pinCode' ? 'maxlength="6" inputmode="numeric"' : ''} />`;
    return `<div class="field"><label>${label} ${auto ? '<span class="auto-chip">Auto</span>' : ''}</label>${field}</div>`;
  }).join('');

  $$('#advisorForm [data-key]').forEach(el => {
    el.addEventListener('input', e => updateAdvisorField(e.target.dataset.key, e.target.value));
    el.addEventListener('change', e => updateAdvisorField(e.target.dataset.key, e.target.value));
  });
  $('#generateBtn').addEventListener('click', () => renderRecommendations());
  renderRecommendations();
}

function updateAdvisorField(key, value){
  state.advisor[key] = value;
  state.auto[key] = false;
}

function renderRecommendations(){
  const a = state.advisor;
  const list = [...data.crops].sort((x,y)=>scoreCrop(y, a) - scoreCrop(x, a)).slice(0,3).map(c => {
    const s = scoreCrop(c, a);
    const className = s >= 90 ? 'high' : s >= 80 ? 'mid' : 'low';
    return `
      <div class="crop-card">
        <div class="crop-head"><div><div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap"><h3 class="crop-name">${c.icon} ${c.crop}</h3>${c.hybrid ? '<span class="pill blue">Hybrid</span>' : ''}</div><div class="crop-meta">Best for ${a.soil.split('(')[0].trim()} · ${a.irrigation} irrigation</div></div><div style="text-align:right"><div class="score ${className}">${s}%</div><div class="crop-meta">match</div></div></div>
        <div class="progress"><div style="width:${s}%"></div></div>
        <div class="tag-row"><span class="tag">Risk: ${c.risk}</span><span class="tag soft">Profit ₹${c.profit.toLocaleString()}</span><span class="tag soft">Water: ${c.water}</span></div>
      </div>`;
  }).join('');
  $('#recommendations').innerHTML = list;
}

function scoreCrop(c, a){
  let score = c.confidence;
  if (a.soil.includes('Black') && c.crop.includes('Soybean')) score += 4;
  if (a.season === 'Rabi' && c.crop.includes('Wheat')) score += 5;
  if (a.season === 'Kharif' && (c.crop.includes('Soybean') || c.crop.includes('Maize'))) score += 4;
  if (a.irrigation === 'Rainfed' && c.water === 'Low') score += 5;
  if (a.labourType === 'Self Labour' && !c.hybrid) score += 2;
  if (Number(a.budget || 0) < 60000 && c.investment < 13000) score += 3;
  return Math.max(40, Math.min(98, score));
}

function renderCommunity(){
  const container = $('#community');
  const posts = state.posts.filter(p => matchesSearch(p.content) || matchesSearch(p.author) || p.tags.some(t => matchesSearch(t)));
  container.innerHTML = `
    <div class="page-title">Community</div>
    <p class="page-subtitle">Share updates, ask questions and learn from other farmers and experts.</p>
    <div class="community-grid" style="margin-top:18px">
      <div>
        ${posts.map(post => `
          <div class="post" data-post="${post.id}">
            <div class="post-head">
              <div class="post-avatar" style="background:${post.color}">${post.avatar}</div>
              <div style="flex:1"><div style="font-weight:800">${post.author}</div><div class="post-meta">📍 ${post.location} · ${post.time}</div></div>
              <button class="follow-btn">Follow</button>
            </div>
            <div class="post-body">${post.content}</div>
            <div class="post-tags">${post.tags.map(t=>`<span class="tag">#${t}</span>`).join('')}</div>
            <div class="post-actions">
              <button class="action-btn ${post.liked ? 'liked' : ''}" data-like="${post.id}">❤ <span>${post.likes}</span></button>
              <button class="action-btn">💬 <span>${post.comments}</span></button>
              <button class="action-btn">↗ <span>${post.shares}</span></button>
            </div>
          </div>`).join('')}
      </div>
      <div style="display:grid;gap:18px">
        <div class="expert-box">
          <div class="section-title"><div><h2>Ask Experts</h2><p>Quick answers from agriculture experts.</p></div><span class="pill blue">Live</span></div>
          ${data.questions.map(q => `<div class="q-item"><p>${q.question}</p><div class="q-foot"><span>${q.answered ? '✓ ' + q.expert : 'Awaiting expert'}</span><span>${q.answers} answers</span></div></div>`).join('')}
          <button class="ghost-btn" style="width:100%">+ Ask a Question</button>
        </div>
        <div class="leaderboard">
          <div class="section-title"><div><h2>Top Farmers</h2><p>Community leaderboard.</p></div><span class="pill green">Ranking</span></div>
          ${data.leaderboard.map(f => `<div class="rank-item"><div class="rank-badge">${f.badge}</div><div><div class="rank-name">${f.name}</div><div class="rank-state">${f.state}</div></div><div class="rank-points"><strong>${f.points.toLocaleString()}</strong><span class="rank-state">pts</span></div></div>`).join('')}
        </div>
      </div>
    </div>`;

  $$('[data-like]', container).forEach(btn => btn.addEventListener('click', () => toggleLike(Number(btn.dataset.like))));
}

function toggleLike(id){
  const p = state.posts.find(x => x.id === id);
  if(!p) return;
  p.liked = !p.liked;
  p.likes += p.liked ? 1 : -1;
  renderCommunity();
}

function renderSchemes(){
  const container = $('#schemes');
  const filtered = data.schemes.filter(s => (state.schemeCategory === 'All' || s.category === state.schemeCategory) && matchesSearch(s.name) || matchesSearch(s.description) || matchesSearch(s.ministry));
  const categories = ['All', ...new Set(data.schemes.map(s => s.category))];
  container.innerHTML = `
    <div class="page-title">Government Schemes</div>
    <p class="page-subtitle">Search and explore central schemes available to farmers.</p>
    <div class="filters" style="margin-top:18px">
      <input id="schemeSearch" type="search" placeholder="Search schemes..." value="${escapeAttr(state.schemeSearch)}" />
      <select id="schemeCategory">${categories.map(c => `<option ${state.schemeCategory===c?'selected':''}>${c}</option>`).join('')}</select>
    </div>
    <div class="scheme-grid">${filtered.map(s => `
      <div class="scheme-card">
        <div class="scheme-top"><div><h3>${s.name}</h3><div class="scheme-extra">${s.ministry}</div></div><span class="pill ${s.eligible ? 'green' : 'red'}">${s.eligible ? 'Eligible' : 'Not Eligible'}</span></div>
        <p>${s.description}</p>
        <div class="scheme-actions"><div><div class="scheme-extra">Benefit</div><strong style="color:var(--green)">${s.benefit}</strong><div class="scheme-extra" style="margin-top:8px">Deadline: ${s.deadline}</div></div><a class="scheme-link" href="${s.link}" target="_blank" rel="noopener">Apply Now</a></div>
      </div>`).join('')}</div>`;
  $('#schemeSearch').addEventListener('input', e => { state.schemeSearch = e.target.value.toLowerCase(); renderSchemes(); });
  $('#schemeCategory').addEventListener('change', e => { state.schemeCategory = e.target.value; renderSchemes(); });
}

function renderProfile(){
  const container = $('#profile');
  container.innerHTML = `
    <div class="page-title">Profile</div>
    <p class="page-subtitle">Farm overview, performance stats and productivity highlights.</p>
    <div class="profile-grid" style="margin-top:18px">
      ${data.profileStats.map(s => `<div class="card stat-card"><div class="stat-label">${s.label}</div><div class="stat-value">${s.value}</div><div class="stat-sub">from last season</div></div>`).join('')}
    </div>
    <div class="profile-main" style="margin-top:18px">
      <div class="card pad">
        <div class="section-title"><div><h2>Farm Details</h2><p>Current farm profile.</p></div><span class="pill">Editable</span></div>
        <div class="list">${data.farmDetails.map(([k,v]) => `<div class="mini-row" style="padding:2px 0"><div class="scheme-extra">${k}</div><strong>${v}</strong></div>`).join('')}</div>
        <div style="margin-top:16px"><button class="btn primary">✎ Edit Profile</button></div>
      </div>
      <div class="card pad">
        <div class="section-title"><div><h2>Monthly Performance</h2><p>Production trend over the year.</p></div><span class="pill green">Growth</span></div>
        <div class="chart">${data.monthlyBars.map(([m,v]) => `<div class="bar" style="height:${v}%"><span>${m}</span><i>${v}%</i></div>`).join('')}</div>
      </div>
    </div>
    <div class="profile-main" style="margin-top:18px">
      <div class="card pad">
        <div class="section-title"><div><h2>Top Achievements</h2><p>Highlights from the farm profile.</p></div><span class="pill blue">Badges</span></div>
        <div class="list">
          <div class="list-item"><div class="icon">🏆</div><div><div style="font-weight:800">Top Farmer Badge</div><small>Earned for consistent performance and community help.</small></div></div>
          <div class="list-item"><div class="icon">💧</div><div><div style="font-weight:800">Water Saver</div><small>Improved irrigation efficiency by 18%.</small></div></div>
          <div class="list-item"><div class="icon">🤖</div><div><div style="font-weight:800">AI Trusted</div><small>94% match accuracy across the latest recommendations.</small></div></div>
        </div>
      </div>
      <div class="card pad">
        <div class="section-title"><div><h2>Farm Gallery</h2><p>Sample field photos.</p></div><span class="pill">Photos</span></div>
        <div class="photo-grid">
          <div class="photo"><img src="assets/hero.png" alt="Farm" /></div>
          <div class="photo"><img src="assets/hero.png" alt="Farm" /></div>
          <div class="photo"><img src="assets/hero.png" alt="Farm" /></div>
          <div class="photo"><img src="assets/hero.png" alt="Farm" /></div>
        </div>
      </div>
    </div>`;
}

function renderNotifications(){
  $('#notificationList').innerHTML = data.notifications.map(n => `<div class="notif-item"><div style="font-weight:800;margin-bottom:4px">${n.title}</div><div class="small">${n.desc}</div><div class="small" style="margin-top:6px">${n.time} ago</div></div>`).join('');
}

function matchesSearch(text){
  if(!state.search) return true;
  return String(text).toLowerCase().includes(state.search);
}

function escapeHtml(str){
  return String(str).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
}
function escapeAttr(str){ return escapeHtml(str); }

init();
