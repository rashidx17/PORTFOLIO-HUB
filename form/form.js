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

    