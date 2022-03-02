export default function burger(btn, nav, navLink, body, phone) {
  const mobileBtn = document.querySelector(btn);
  const navMenu = document.querySelector(nav);
  const bodyPage = document.querySelector(body);
  const navLinks = document.querySelectorAll(navLink);
  const phoneEl = document.querySelector(phone);

  function toggleMenu() {
    mobileBtn.classList.toggle('burger_active');
    navMenu.classList.toggle('nav_active');
    bodyPage.classList.toggle('disable-scroll');
    phoneEl.classList.toggle('phone_active');
  }

  function closeMenu() {
    mobileBtn.classList.remove('burger_active');
    bodyPage.classList.remove('disable-scroll');
    phoneEl.classList.remove('phone_active');
    navMenu.classList.remove('nav_active');
  }

  if (mobileBtn) {
    mobileBtn.addEventListener('click', toggleMenu);
  }

  if (navLinks) {
    navLinks.forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  }

  document.addEventListener('click', (e) => {
    if (e.target.classList == 'disable-scroll') {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });
}
