// Toggle Password
document.getElementById("toggle-password").addEventListener("click", () => {
  const pwd = document.getElementById("password");
  const type = pwd.type === "password" ? "text" : "password";
  pwd.type = type;
  document.getElementById("toggle-password").classList.toggle("fa-eye-slash");
});

document.getElementById("toggle-confirm").addEventListener("click", () => {
  const pwd = document.getElementById("confirm");
  const type = pwd.type === "password" ? "text" : "password";
  pwd.type = type;
  document.getElementById("toggle-confirm").classList.toggle("fa-eye-slash");
});

// Form Submission
document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  if (pass !== confirm) {
    alert("Passwords do not match!");
    return;
  }

  alert(`Welcome, ${name}! Your account has been created.`);
});
