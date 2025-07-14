    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(e) {
      const phone = document.getElementById('phone');
      const email = document.getElementById('email');

      const phoneValid = /^[0-9]{10}$/.test(phone.value.trim());
      const emailValid = email.checkValidity();

      if (!phoneValid || !emailValid) {
        e.preventDefault();
        alert("Please enter a valid 10-digit phone number and email.");
      } else {
        alert("Form submitted successfully!");
      }
    });