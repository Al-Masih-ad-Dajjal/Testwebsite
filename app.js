(() => {
    const header = document.querySelector('.site-header');
    const nav = document.getElementById('nav');
    const menuBtn = document.querySelector('.menu-btn');
  
    // Solid header after scrolling past the top
    const onScroll = () => header.classList.toggle('solid', window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  
    // Mobile menu
    menuBtn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open);
      header.classList.add('solid');
    });
    nav.addEventListener('click', e => {
      if (e.target.closest('a')) {
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  
    // Services accordion (one open at a time)
    const items = document.querySelectorAll('.acc-item');
    items.forEach(item => {
      item.querySelector('.acc-head').addEventListener('click', () => {
        const willOpen = !item.classList.contains('open');
        items.forEach(i => {
          i.classList.remove('open');
          i.querySelector('.acc-head').setAttribute('aria-expanded', 'false');
        });
        if (willOpen) {
          item.classList.add('open');
          item.querySelector('.acc-head').setAttribute('aria-expanded', 'true');
        }
      });
    });
  
    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();
  })();