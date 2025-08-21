// ===== PAGES (templates) =====
const pages = {
  dashboard: `
    <div class="topbar"><div class="page-title">Dashboard</div></div>
    <div class="hero">
      <div class="hero-left"><h1 class="greeting">Welcome</h1><p class="subtext">Here is your job listing statistic report of the company.</p></div>
      <img src="recruitdash.png" alt="Dashboard Illustration">
    </div>
    <div class="stats-row">
      <div class="stat-card"><div class="stat-icon"><i class="fa-solid fa-briefcase"></i></div><div><div class="stat-number">20</div><div class="stat-label">Applications Received</div></div></div>
      <div class="stat-card"><div class="stat-icon"><i class="fa-solid fa-briefcase"></i></div><div><div class="stat-number">5</div><div class="stat-label">Total Job Post</div></div></div>
    </div>
    <div class="content-grid">
      <div class="chart-card"><div class="section-title" style="font-size:22px;font-weight:700;">Company Statistics</div><canvas id="barChart"></canvas></div>
      <aside class="right-col">
        <div class="progress-card"><div class="progress-title">Most Applied Job</div><div class="progress-sub">Frontend Intern</div><div class="progress-value">12</div></div>
        <div class="progress-card"><div class="progress-title">Applicant Summary</div><canvas id="pieChart"></canvas></div>
      </aside>
    </div>
  `,
  "all-applicants": `
  <div class="topbar">
    <div class="page-title">All Applicants</div>
    <div style="color:var(--muted);font-size:14px;">100+ Candidates</div>
  </div>

  <!-- Filters -->
  <div class="filters">
    <div class="dropdown" data-filter="location">
      <button>Location ▼</button>
      <div class="dropdown-content">
        <a href="#">All</a>
        <a href="#">Remote</a>
        <a href="#">Onsite</a>
        <a href="#">Freelance</a>
      </div>
    </div>
    <div class="dropdown" data-filter="industry">
      <button>Industry ▼</button>
      <div class="dropdown-content">
        <a href="#">All</a>
        <a href="#">Software</a>
        <a href="#">Design</a>
        <a href="#">Content</a>
      </div>
    </div>
    <div class="dropdown" data-filter="experience">
      <button>Experience ▼</button>
      <div class="dropdown-content">
        <a href="#">All</a>
        <a href="#">Junior</a>
        <a href="#">Mid</a>
        <a href="#">Senior</a>
      </div>
    </div>
    <div class="dropdown" data-filter="skills">
      <button>Skills ▼</button>
      <div class="dropdown-content">
        <a href="#">All</a>
        <a href="#">UI/UX</a>
        <a href="#">JavaScript</a>
        <a href="#">SEO</a>
      </div>
    </div>
    <div class="dropdown" data-filter="rate">
      <button>Rate ▼</button>
      <div class="dropdown-content">
        <a href="#">All</a>
        <a href="#">$40-$50</a>
        <a href="#">$51-$60</a>
      </div>
    </div>
    <div class="dropdown" data-filter="availability">
      <button>Availability ▼</button>
      <div class="dropdown-content">
        <a href="#">All</a>
        <a href="#">Full-time</a>
        <a href="#">Part-time</a>
      </div>
    </div>
  </div>

  <!-- Applicants Grid -->
  <div id="applicants-grid" class="grid"></div>

  <!-- Pagination -->
  <div class="pagination" id="pagination"></div>
  `,
  "job-listing": `
    <div class="topbar"><div class="page-title">Dashboard</div></div>
    <div class="hero">
      <div class="hero-left"><h1 class="greeting">Job Listing</h1></div>
      <img src="illustration.png" alt="Job Illustration">
    </div>
    <div class="stats-row">
      <div class="stat-card"><div class="stat-icon"><i class="fa-solid fa-briefcase"></i></div><div><div class="stat-number">20</div><div class="stat-label">Applications Received</div></div></div>
      <div class="stat-card"><div class="stat-icon"><i class="fa-solid fa-briefcase"></i></div><div><div class="stat-number">67</div><div class="stat-label">Total Job Post</div></div></div>
    </div>
    <div class="chart-card"><div class="section-title" style="font-size:20px;">All Job Summary Table</div>
      <div class="table-scroll">
        <table class="job-table">
          <thead><tr><th>Job Title</th><th>Location</th><th>Applicants</th><th>Status</th><th>Posted On</th><th>Actions</th></tr></thead>
          <tbody>
            <tr><td>UI/UX Designer</td><td>Remote</td><td>10</td><td class="status-open">Open</td><td>Mar 20, 2025</td><td>✏️ 🗑</td></tr>
            <tr><td>React Developer</td><td>Onsite</td><td>5</td><td class="status-closed">Closed</td><td>Mar 5, 2025</td><td>✏️ 🗑</td></tr>
            <tr><td>Data Analyst</td><td>Remote</td><td>0</td><td class="status-open">Open</td><td>Mar 5, 2025</td><td>✏️ 🗑</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  "post-job": `
    <div class="topbar postjob-topbar">
      <div class="page-title postjob-title">Post Job <i class="fa-solid fa-briefcase" style="font-size:22px;"></i></div>
    </div>

    <section class="postjob-wrap">
      <div class="postjob-card">
        <div class="field">
          <label class="field-label">Job Title</label>
          <input class="ui-input" type="text" placeholder="e.g., 'UI/UX Designer'">
        </div>
        <div class="form-row">
          <div class="field">
            <label class="field-label">Employment Type</label>
            <select class="ui-input ui-select">
              <option selected disabled>Select type</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Internship</option>
            </select>
          </div>
          <div class="field">
            <label class="field-label">Job Category</label>
            <input class="ui-input" type="text" placeholder="e.g., Design, Development">
          </div>
        </div>
        <div class="form-row">
          <div class="field">
            <label class="field-label">Experience Level</label>
            <select class="ui-input ui-select">
              <option selected disabled>Select experience</option>
              <option>Fresher</option>
              <option>Intermediate</option>
              <option>Senior</option>
            </select>
          </div>
          <div class="field">
            <label class="field-label">Duration</label>
            <select class="ui-input ui-select">
              <option selected disabled>Select months</option>
              ${Array.from({length:12},(_,i)=>`<option>${i+1}</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="field">
          <label class="field-label">Location</label>
          <input class="ui-input" type="text" placeholder="Enter City">
        </div>
        <div class="form-row">
          <div class="field">
            <label class="field-label">Stipend</label>
            <input class="ui-input" type="text" placeholder="Min/Max">
          </div>
          <div class="field">
            <label class="field-label">Work Type</label>
            <div class="worktype">
              <label class="radio"><input type="radio" name="worktype" checked><span>On-site</span></label>
              <label class="radio"><input type="radio" name="worktype"><span>Remote</span></label>
              <label class="radio"><input type="radio" name="worktype"><span>Hybrid</span></label>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="field-label">Job Description</label>
          <textarea class="ui-input ui-textarea" placeholder="Describe the role, daily tasks, company..."></textarea>
        </div>
        <div class="field">
          <label class="field-label">Required Skills</label>
          <div id="skills-container">
            <div class="inline-input">
              <input class="ui-input" type="text" placeholder="e.g., Figma">
              <button type="button" id="add-skill" class="icon-btn" aria-label="Add skill"><i class="fa-solid fa-plus"></i></button>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="field-label">Application Deadline</label>
          <input class="ui-input" type="date" placeholder="Enter">
        </div>
        <div class="form-actions">
          <button type="button" class="btn btn-primary">Post</button>
          <button type="button" class="btn btn-ghost-danger">Cancel</button>
        </div>
      </div>
    </section>
  `,
  message: `<div class="topbar"><div class="page-title">Message</div></div><p>Page under construction...</p>`
};

// ===== LOAD PAGE =====
function loadPage(page) {
  const main = document.getElementById("main-content");
  main.innerHTML = pages[page] || "<p>Page not found</p>";
  if (page === "dashboard") initCharts();
  if (page === "all-applicants") renderApplicants();
}

// ===== CHARTS =====
function initCharts() {
  const barCtx = document.getElementById('barChart')?.getContext('2d');
  if (barCtx) {
    new Chart(barCtx, { type:'bar', data:{ labels:['Frontend','UI/UX','Backend','HR'], datasets:[{ data:[25,10,14,8], backgroundColor:'#2f5fc1', borderRadius:6 }]}, options:{ plugins:{ legend:{ display:false }}, scales:{ y:{ beginAtZero:true }}, maintainAspectRatio:true, responsive:true }});
  }
  const pieCtx = document.getElementById('pieChart')?.getContext('2d');
  if (pieCtx) {
    new Chart(pieCtx, { type:'pie', data:{ labels:['Accepted','Rejected'], datasets:[{ data:[60,30], backgroundColor:['#2f5fc1','#87b6ff'] }]}, options:{ plugins:{ legend:{ display:false }}, maintainAspectRatio:true, responsive:true }});
  }
}

// ===== SIDEBAR NAV =====
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    loadPage(link.dataset.page);
    if (window.matchMedia('(max-width: 768px)').matches) document.body.classList.remove('sidebar-open');
  });
});

// ===== MOBILE TOGGLE =====
const hamburger = document.getElementById('hamburger');
const scrim = document.getElementById('scrim');
hamburger.addEventListener('click', ()=> document.body.classList.toggle('sidebar-open'));
scrim.addEventListener('click', ()=> document.body.classList.remove('sidebar-open'));
window.addEventListener('resize', ()=> { if (window.innerWidth > 768) document.body.classList.remove('sidebar-open'); });

// ===== INITIAL PAGE =====
loadPage("dashboard");

// ===== DYNAMIC SKILLS =====
document.addEventListener("click", function(e){
  if(e.target.closest("#add-skill")){
    const container = document.getElementById("skills-container");
    if(!container) return;
    const inputs = container.querySelectorAll(".inline-input");
    if(inputs.length < 3){
      const newField = document.createElement("div");
      newField.className = "inline-input";
      newField.innerHTML = `
        <input class="ui-input" type="text" placeholder="e.g., Skill ${inputs.length+1}">
        <button type="button" class="icon-btn remove-skill" aria-label="Remove skill"><i class="fa-solid fa-minus"></i></button>
      `;
      container.appendChild(newField);
    }
    if(container.querySelectorAll(".inline-input").length >= 3){
      const addBtn = document.getElementById("add-skill");
      if (addBtn) addBtn.disabled = true;
    }
  }
  if(e.target.closest(".remove-skill")){
    const container = document.getElementById("skills-container");
    e.target.closest(".inline-input").remove();
    const addBtn = document.getElementById("add-skill");
    if (addBtn) addBtn.disabled = (container.querySelectorAll('.inline-input').length >= 3);
  }
});

// ===== APPLICANTS DATA & UI =====
const applicantsData = [
  {name:"Khushi Chaturvedi", role:"UI/UX Designer", location:"Remote", industry:"Design", experience:"Senior", skills:["Figma","User Research","Wireframing"], rate:"$51-$60", availability:"Full-time", img:"https://www.shutterstock.com/image-photo/positive-young-indian-woman-student-260nw-2385200433.jpg"},
  {name:"Rashid Khan", role:"Frontend Developer", location:"Onsite", industry:"Software", experience:"Mid", skills:["Video Editing","Graphic Designing","Excel"], rate:"$40-$50", availability:"Part-time", img:"resources/IMG_4157.jpg"},
  {name:"Arpit Shukla", role:"Web Developer", location:"Remote", industry:"Software", experience:"Mid", skills:["HTML/CSS","JavaScript","Frameworks"], rate:"$40-$50", availability:"Full-time", img:"resources/WhatsApp Image 2025-07-04 at 15.39.15_3f54a18a.jpg"},
  {name:"Pallavi Patel", role:"Backend Developer", location:"Remote", industry:"Software", experience:"Senior", skills:["MongoDB","SQL","API"], rate:"$51-$60", availability:"Full-time", img:"resources/WhatsApp Image 2025-07-04 at 15.39.32_7637ca1e.jpg"},
  {name:"Sohail Ali", role:"Content Strategist", location:"Freelance", industry:"Content", experience:"Senior", skills:["Contentful","SEO","Copywriting"], rate:"$51-$60", availability:"Part-time", img:"https://cdn.pixabay.com/photo/2022/03/11/06/14/indian-man-7061278_1280.jpg"},
  {name:"Kushal Pandey", role:"UX Researcher", location:"Remote", industry:"Design", experience:"Mid", skills:["UserTesting","Data Analysis","Survey Design"], rate:"$40-$50", availability:"Full-time", img:"https://img.freepik.com/premium-photo/indian-college-student-park-high-definition-images_181020-2376.jpg"},
];

let filters = {location:"All", industry:"All", experience:"All", skills:"All", rate:"All", availability:"All"};
let currentPage = 1; const perPage = 6;

function renderApplicants() {
  const grid = document.getElementById("applicants-grid");
  if(!grid) return;
  let filtered = applicantsData.filter(app => {
    return Object.keys(filters).every(f => {
      if(filters[f] === "All") return true;
      if(f === "skills") return app.skills.includes(filters[f]);
      return (app[f]||'').toLowerCase() === filters[f].toLowerCase();
    });
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  if (currentPage > totalPages) currentPage = 1;
  const start = (currentPage - 1) * perPage; const end = start + perPage;
  const pageItems = filtered.slice(start, end);

  grid.innerHTML = pageItems.map(app => `
    <div class="card">
      <div class="card-header">
        <img src="${app.img}" class="profile-pic" alt="${app.name}">
        <div>
          <h3>${app.name}</h3>
          <div class="role">${app.role} | ${app.location}</div>
        </div>
      </div>
      <div class="skills">${app.skills.map(s => `<div class="skill">${s}</div>`).join('')}</div>
      <div class="actions">
        <button class="btn-view">View Portfolio</button>
        <button class="btn-accept">Accept</button>
        <button class="btn-reject">Reject</button>
      </div>
    </div>
  `).join('');

  renderPagination(totalPages);
}

function renderPagination(total){
  const pagination = document.getElementById("pagination");
  if(!pagination) return;
  pagination.innerHTML = '';
  for(let i=1;i<=total;i++){
    pagination.innerHTML += `<a href="#" class="${i===currentPage?'active':''}" data-page="${i}">${i}</a>`;
  }
}

// Filter & Pagination events — delegated
document.addEventListener("click", e => {
  if(e.target.closest(".dropdown-content a")) {
    e.preventDefault();
    const val = e.target.textContent.trim();
    const filterType = e.target.closest(".dropdown").dataset.filter;
    filters[filterType] = val;
    currentPage = 1;
    renderApplicants();
  }
  if(e.target.closest(".pagination a")) {
    e.preventDefault();
    currentPage = parseInt(e.target.dataset.page);
    renderApplicants();
  }
});

