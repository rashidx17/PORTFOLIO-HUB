// Photo Preview
const photoInput = document.getElementById('photoInput');
const previewContainer = document.getElementById('previewContainer');
const photoIcon = document.getElementById('photoIcon');

photoInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      photoIcon.src = e.target.result;
    }
    reader.readAsDataURL(file);
  }
});

// Required Fields Check
document.getElementById('saveBtn').addEventListener('click', function () {
  const fullName = document.getElementById('fullName').value.trim();
  const role = document.getElementById('role').value.trim();
  const city = document.getElementById('city').value.trim();
  const dob = document.getElementById('dob').value.trim();
  const aboutMe = document.getElementById('aboutMe').value.trim();
  const degree = document.getElementById('eduDegree').value.trim();
  const college = document.getElementById('eduCollege').value.trim();
  const year = document.getElementById('eduYear').value.trim();
  const genderSelected = document.querySelector('input[name="gender"]:checked');

  if (!fullName || !role || !city || !dob || !genderSelected || !aboutMe || !degree || !college || !year) {
    alert("Please fill in all required fields before continuing.");
    return;
  }

  window.location.href = "form2.html";
});
