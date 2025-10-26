const events = [
  { title: "GDGoC Recruitment Heist Phase 2", date: "Oct 28, 2025", description: "Its time to showcase your skills in your interested verticals. Don't miss a chance to be the part of GDGoC" },
  { title: "AI & ML Workshop", date: "Nov 1, 2025", description: "An exciting workshop on the google cloud's tech Vertex AI." },
  { title: "Pre Dev Fest", date: "Nov 15, 2025", description: "🚀 Happening for the FIRST time in India! 🇮🇳 AI Unplugged: A Prelude to Devfest 2025." }
];

const alumni = [
  { name: "Shruti Desai", designation: "R&D Manager at Nestle", email: "shruti@demo.ietdavv.edu" },
  { name: "Manish Gupta", designation: "Solutions Architect at Amazon", email: "manish@demo.ietdavv.edu" }
];

const seniors = [
  {
    name: "Yash Jain",
    seniority: "3rd year IT",
    designation: "GDGoC Lead",
    expertise: "overall technical domain",
    linkedin: "https://www.linkedin.com/in/iamyashjain"
  },
  {
    name: "Kavyansh Saxena",
    seniority: "3rd Year",
    designation: "GDGoC Co Lead",
    expertise: "UX/UI Designer",
    linkedin: "https://www.linkedin.com/in/kavyansh-saxena-994a33292"
  },
  {
    name: "Yashasvi Sharma",
    seniority: "3rd Year",
    designation: "Summer Intern @Google 2025",
    expertise: "Backend dev and Marketing",
    linkedin: "https://www.linkedin.com/in/yashasvisharma1369"
  }
];

const placements = [
  { company: "TechSoft Inc.", position: "Software Intern", lastDate: "Nov 30, 2025", details: "Summer internship for CS/IT students." },
  { company: "DataSolve", position: "Data Analyst", lastDate: "Dec 10, 2025", details: "Entry-level position with training." },
  { company: "WebWorks", position: "Frontend Developer", lastDate: "Dec 15, 2025", details: "Strong knowledge of React required." }
];

function login() {
  const id = document.getElementById("studentIdInput").value.trim();
  const loginMsg = document.getElementById("loginMsg");
  if (id.length === 0) {
    loginMsg.textContent = "Please enter your Student ID.";
    loginMsg.style.color = "red";
    return;
  }
  loginMsg.textContent = "";
    document.getElementById("login-section").style.display = "none";

    // Show only the events tab by default and mark button active
    openTab('events');

    document.querySelector("header h1").textContent = `Welcome to CollegeHub, Student: ${id}`;
}

function showEvents() {
  const container = document.getElementById("eventsContainer");
  container.innerHTML = events.map(event => `
    <div class="card">
      <h3>${event.title}</h3>
      <p><strong>Date:</strong> ${event.date}</p>
      <p>${event.description}</p>
    </div>
  `).join("");
}

function showMentorship() {
  const alumniContainer = document.getElementById("alumniContainer");
  const seniorContainer = document.getElementById("seniorContainer");

  alumniContainer.innerHTML = alumni.map(a => `
    <div class="card">
      <h4>${a.name}</h4>
      <p><strong>Designation:</strong> ${a.designation}</p>
      <p><strong>Email:</strong> <a href="mailto:${a.email}">${a.email}</a></p>
    </div>
  `).join("");

  seniorContainer.innerHTML = seniors.map(s => `
    <div class="card">
      <h4>${s.name}</h4>
      <p><strong>Expertise:</strong> ${s.expertise}</p>
      <p><strong>LinkedIn:</strong> <a href="${s.linkedin}" target="_blank">${s.linkedin}</a></p>
    </div>
  `).join("");
}

function showPlacements() {
  const container = document.getElementById("placementsContainer");
  container.innerHTML = placements.map(posting => `
    <div class="card">
      <h3>${posting.company} - ${posting.position}</h3>
      <p><strong>Last Date to Apply:</strong> ${posting.lastDate}</p>
      <p>${posting.details}</p>
    </div>
  `).join("");
}

function submitMentorshipRequest(event) {
  event.preventDefault();
  const name = document.getElementById("menteeName").value.trim();
  const interest = document.getElementById("fieldOfInterest").value.trim();
  const response = document.getElementById("mentorshipResponse");

  if (name && interest) {
    response.textContent = `Thanks ${name}! Your mentorship request in "${interest}" has been received. We will connect you soon.`;
    document.getElementById("mentorshipForm").reset();
  } else {
    response.textContent = "Please fill in all fields.";
  }
}

// Tab switching function
function openTab(tabName) {
  // Hide all tab contents
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => {
    tab.style.display = 'none';
  });

  // Remove active class from all buttons
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(btn => {
    btn.classList.remove('active');
  });

  // Show selected tab and mark button active
  const selectedTab = document.getElementById(tabName);
  if (selectedTab) selectedTab.style.display = 'block';

  const activeButton = Array.from(buttons).find(btn => btn.textContent === capitalizeFirstLetter(tabName));
  if (activeButton) activeButton.classList.add('active');

  // Load content dynamically if needed
  if (tabName === 'events') showEvents();
  else if (tabName === 'mentorship') showMentorship();
  else if (tabName === 'placements') showPlacements();
}

// Helper to capitalize text (for matching button text)
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

