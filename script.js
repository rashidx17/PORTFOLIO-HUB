// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Intersection Observer to add 'in-view' class on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, {
  threshold: 0.2
});

// Observe all .hiw-step elements
document.querySelectorAll('.hiw-step').forEach(step => {
  observer.observe(step);
});

// Dropdowns are handled by CSS hover, but here's additional JS if you want click-to-toggle
document.querySelectorAll('.dropdown > button').forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    document.querySelectorAll('.dropdown-content').forEach(menu => {
      if (menu !== button.nextElementSibling) menu.style.display = 'none';
    });
    const dropdownMenu = button.nextElementSibling;
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown-content').forEach(menu => {
    menu.style.display = 'none';
  });
});

// Pagination active state
document.querySelectorAll('.pagination button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.pagination button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});


document.querySelector('.filters').addEventListener('click', function(e) {
  if (window.innerWidth <= 660 && e.target === this) {
    this.classList.toggle('show');
  }
});

(function () {
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        scrollObserver.unobserve(entry.target); // trigger only once
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.animate-on-scroll').forEach((el) => scrollObserver.observe(el));
})();

(function () {
  const testimonialObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        testimonialObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => testimonialObserver.observe(el));
})();


// Cursor
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursorblur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});
