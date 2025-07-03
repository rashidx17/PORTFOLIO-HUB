// Pen icon triggers file upload
document.getElementById("triggerUpload").addEventListener("click", function () {
  document.getElementById("photoUpload").click();
});

// Show selected image preview
document.getElementById("photoUpload").addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.querySelector(".profile-image img").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Enable/disable description
function toggleDescriptionEdit() {
  const textarea = document.getElementById("description");
  textarea.disabled = !textarea.disabled;
  if (!textarea.disabled) textarea.focus();
}

// Add skill input
function addSkill() {
  const container = document.getElementById("skills-container");
  const count = container.querySelectorAll(".skill").length + 1;

  const skillDiv = document.createElement("div");
  skillDiv.className = "skill";
  skillDiv.setAttribute("data-aos", "fade-right");

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = `Skill ${count}.`;

  const plusSpan = document.createElement("span");
  plusSpan.className = "icon plus";
  plusSpan.innerHTML = '<i class="fas fa-plus"></i>';
  plusSpan.onclick = addSkill;

  skillDiv.appendChild(input);
  skillDiv.appendChild(plusSpan);
  container.appendChild(skillDiv);
}

// Add service input
function addService() {
  const container = document.getElementById("services-container");
  const count = container.querySelectorAll(".service").length + 1;

  const serviceDiv = document.createElement("div");
  serviceDiv.className = "service";
  serviceDiv.setAttribute("data-aos", "fade-left");

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = `Service ${count}.`;

  const plusSpan = document.createElement("span");
  plusSpan.className = "icon plus";
  plusSpan.innerHTML = '<i class="fas fa-plus"></i>';
  plusSpan.onclick = addService;

  serviceDiv.appendChild(input);
  serviceDiv.appendChild(plusSpan);
  container.appendChild(serviceDiv);
}

// Handle form submission
function handleSubmit() {
  const role = document.querySelector(".role-title").value.trim();
  const description = document.getElementById("description").value.trim();
  const skills = [...document.querySelectorAll(".skill input")].map(i => i.value.trim()).filter(Boolean);
  const services = [...document.querySelectorAll(".service input")].map(i => i.value.trim()).filter(Boolean);
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  const phonePattern = /^[0-9]{10}$/;
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

  if (!role) return alert("❌ Enter your role/speciality.");
  if (!description) return alert("❌ Enter a description.");
  if (skills.length === 0) return alert("❌ Add at least one skill.");
  if (services.length === 0) return alert("❌ Add at least one service.");
  if (!phonePattern.test(phone)) return alert("❌ Invalid phone number.");
  if (!emailPattern.test(email)) return alert("❌ Invalid email address.");

  document.getElementById("popupOverlay").style.display = "flex";
  document.querySelector(".role-title").disabled = true;
  document.getElementById("description").disabled = true;
  document.querySelectorAll(".skill input").forEach(i => i.disabled = true);
  document.querySelectorAll(".service input").forEach(i => i.disabled = true);
  document.getElementById("phone").disabled = true;
  document.getElementById("email").disabled = true;

  document.getElementById("submitBtn").style.display = "none";
  document.getElementById("editBtn").style.display = "inline-block";
}

function closePopup() {
  document.getElementById("popupOverlay").style.display = "none";
}

function enableFormEdit() {
  document.getElementById("submitBtn").style.display = "block";
  document.getElementById("editBtn").style.display = "none";

  document.querySelector(".role-title").disabled = false;
  document.getElementById("description").disabled = false;
  document.querySelectorAll(".skill input").forEach(i => i.disabled = false);
  document.querySelectorAll(".service input").forEach(i => i.disabled = false);
  document.getElementById("phone").disabled = false;
  document.getElementById("email").disabled = false;
}

