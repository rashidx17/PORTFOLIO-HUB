document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  alert(`Welcome to InsideBox, ${email}!`);
  // Add navigation or further form handling here
});
