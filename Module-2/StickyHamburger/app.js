const navigation = document.querySelector('.navbar');
const navigationMobile = document.querySelector('.navbar--mobile');
const navigationMobileMenu = document.querySelector('.navbar__menu--mobile ul');
const navigationMobileBtn = document.querySelector('.navbar--mobile button');
const navigationCloseMobileBtn = document.querySelector('.close-menu');

navigation.classList.add('navbar-sticky');
navigationMobile.classList.add('navbar-sticky');

const handleScroll = navType => {
  let lastKnownScrollPos = 0;
  window.addEventListener('scroll', e => {
    if (window.scrollY > 600 && lastKnownScrollPos < window.scrollY) {
      navType.style.transform = `translateY(-100%)`;
      navType.style.transition = 'all 1s';
    }

    if (lastKnownScrollPos > window.scrollY) {
      setTimeout(() => {
        navType.style.transform = `translateY(0)`;
      }, 500);
    }

    if (window.scrollY < 200) {
      navType.style.transform = `translateY(0)`;
      navType.style.transition = 'none';
    }
    lastKnownScrollPos = window.scrollY;
  });
};

const handleBtnClick = () => {
  navigationMobileBtn.addEventListener('click', () => {
    navigationMobileMenu.classList.toggle('navbar-mobile-active');
  });

  navigationCloseMobileBtn.addEventListener('click', () => {
    navigationMobileMenu.classList.toggle('navbar-mobile-active');
  });
};

handleScroll(navigation);
handleScroll(navigationMobile);
handleBtnClick();
