    // Handle simple filter change logging (extend with actual filtering later)
    const filterEls = [
      document.getElementById('workType'),
      document.getElementById('experience'),
      document.getElementById('role'),
      document.getElementById('stipend'),
      document.getElementById('duration')
    ];
    filterEls.forEach(el => el.addEventListener('change', () => {
      console.log(el.id + ' selected:', el.value);
    }));

    // Drawer logic for mobile
    const filters = document.getElementById('filters');
    const menuBtn = document.getElementById('menuBtn');
    const overlay = document.getElementById('drawerOverlay');
    const closeDrawerBtn = document.getElementById('closeDrawer');

    function openDrawer(){
      filters.classList.add('as-drawer','open');
      overlay.classList.add('show');
      overlay.hidden = false;
      menuBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
    function closeDrawer(){
      filters.classList.remove('open');
      overlay.classList.remove('show');
      menuBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      // wait for transition then hide overlay and remove drawer class if on mobile
      setTimeout(()=>{ overlay.hidden = true; }, 250);
    }

    menuBtn.addEventListener('click', () => {
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      if (!expanded) openDrawer(); else closeDrawer();
    });
    overlay.addEventListener('click', closeDrawer);
    closeDrawerBtn.addEventListener('click', closeDrawer);

    // Ensure proper state on resize (e.g., if drawer open and user rotates device)
    function syncForViewport(){
      const w = window.innerWidth;
      if (w > 600){
        // desktop/tablet: ensure drawer is closed and overlay hidden; filters live inline
        filters.classList.remove('as-drawer','open');
        overlay.classList.remove('show');
        overlay.hidden = true;
        menuBtn.setAttribute('aria-expanded','false');
        document.body.style.overflow = '';
        // Also make inline filters visible via CSS (handled by media queries)
      }
    }
    window.addEventListener('resize', syncForViewport);
    window.addEventListener('orientationchange', syncForViewport);
    syncForViewport();
