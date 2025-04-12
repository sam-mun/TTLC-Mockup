document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector('.custom-toggler');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileMenuOverlay');
    const closeBtn = document.getElementById('closeMobileMenu');

    function openMenu() {
      mobileMenu.classList.add('show');
      overlay.classList.add('show');
      document.body.classList.add('no-scroll');
    }

    function closeMenu() {
      mobileMenu.classList.remove('show');
      overlay.classList.remove('show');
      document.body.classList.remove('no-scroll');
    }

    toggler.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
  });
  