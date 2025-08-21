
      // Animate circular progress to 80% on load (right column)
      (function () {
        const progress = document.getElementById("progress");
        const text = document.getElementById("progress-text");
        if (!progress || !text) return;

        const r = 48;
        const perimeter = 2 * Math.PI * r; // ~302.4
        const targetPercent = 80;

        const start = perimeter;
        const end = perimeter * (1 - targetPercent / 100);

        const duration = 1100; // ms
        const fps = 60;
        const steps = Math.round(duration / (1000 / fps));
        let currentStep = 0;

        function animate() {
          currentStep++;
          const t = currentStep / steps;
          const eased = 1 - Math.pow(1 - t, 3);

          const offsetNow = start + (end - start) * eased;
          progress.style.strokeDashoffset = offsetNow;

          const numNow = Math.round(targetPercent * eased);
          text.textContent = numNow + "%";

          if (currentStep < steps) {
            requestAnimationFrame(animate);
          } else {
            progress.style.strokeDashoffset = end;
            text.textContent = targetPercent + "%";
          }
        }

        window.addEventListener("load", function () {
          progress.style.strokeDasharray = perimeter;
          progress.style.strokeDashoffset = start;
          setTimeout(() => requestAnimationFrame(animate), 260);
        });
      })();

      // -------- SPA-like swapping for left column (Dashboard <-> Jobs) --------
      (function () {
        const viewRoot = document.getElementById("view-root");
        const pageTitleEl = document.getElementById("page-title");
        const navLinks = document.querySelectorAll(".nav a");

        function render(templateId) {
          const tpl = document.getElementById(templateId);
          if (!tpl) return;
          const frag = tpl.content.cloneNode(true);

          // simple fade
          viewRoot.innerHTML = "";
          viewRoot.classList.add("fade-enter");
          requestAnimationFrame(() => {
            viewRoot.appendChild(frag);
            viewRoot.classList.add("fade-enter-active");
            setTimeout(() => {
              viewRoot.className = ""; // clear fade classes
            }, 240);
          });
        }

        // Initial: load Dashboard view
        render("tpl-dashboard");

        // Sidebar nav handling (only for items with data-page)
        navLinks.forEach((link) => {
          const page = link.getAttribute("data-page");
          if (!page) return;

          link.addEventListener("click", (e) => {
            e.preventDefault();

            // Toggle active: Jobs should go blue, others white
            document.querySelectorAll(".nav a").forEach((l) =>
              l.classList.remove("active")
            );
            link.classList.add("active");

            // Swap view
            if (page === "dashboard") {
              pageTitleEl.textContent = "Dashboard";
              render("tpl-dashboard");
            } else if (page === "jobs") {
              pageTitleEl.textContent = "Jobs";
              render("tpl-jobs");
            }

            // Close sidebar on small screens after navigation
            if (document.body.classList.contains("sidebar-open")) {
              document.body.classList.remove("sidebar-open");
              sidebarToggle.setAttribute("aria-expanded", "false");
            }
          });
        });
      })();

      // Off-canvas sidebar toggle (<=900px)
      const sidebarToggle = document.getElementById("sidebarToggle");
      const overlay = document.getElementById("overlay");
      if (sidebarToggle) {
        sidebarToggle.addEventListener("click", () => {
          const open = document.body.classList.toggle("sidebar-open");
          sidebarToggle.setAttribute("aria-expanded", open ? "true" : "false");
        });
      }
      if (overlay) {
        overlay.addEventListener("click", () => {
          document.body.classList.remove("sidebar-open");
          if (sidebarToggle) sidebarToggle.setAttribute("aria-expanded", "false");
        });
      }
