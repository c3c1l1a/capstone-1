const hamburgerMenu = document.querySelector('.js-humburger-menu-icon');
hamburgerMenu.addEventListener('click', () => {
  if ('content' in document.createElement('template')) {
    const templateMobileMenu = document.querySelector('.js-template-mobile-menu');
    const mobileMenu = templateMobileMenu.content.firstElementChild.cloneNode(true);

    const closeIcon = mobileMenu.querySelector('.close-icon');
    closeIcon.addEventListener('click', () => {
      mobileMenu.parentNode.removeChild(mobileMenu);
    });

    const aboutPagetLink = mobileMenu.querySelector('.js-about-page-link');
    aboutPagetLink.addEventListener('click', () => {
      const homePage = document.querySelector('.js-home-page');
      if (homePage) homePage.parentNode.removeChild(homePage);

      const aboutPage = document.querySelector('.js-about-page');
      if (aboutPage === null) {
        const templateAboutPage = document.querySelector('.js-template-about-page');
        const aboutPage = templateAboutPage.content.firstElementChild.cloneNode(true);
        const mainTag = document.querySelector('main');
        mainTag.appendChild(aboutPage);
      }
      mobileMenu.parentNode.removeChild(mobileMenu);
    });

    const homePagetLink = mobileMenu.querySelector('.js-home-page-link');
    homePagetLink.addEventListener('click', () => {
      const aboutPage = document.querySelector('.js-about-page');
      if (aboutPage) aboutPage.parentNode.removeChild(aboutPage);

      const homePage = document.querySelector('.js-home-page');
      if (homePage === null) {
        const templateHomePage = document.querySelector('.js-template-home-page');
        const aboutPage = templateHomePage.content.firstElementChild.cloneNode(true);
        const mainTag = document.querySelector('main');
        mainTag.appendChild(aboutPage);
        window.addSpeakerCardWithData();
      }
      mobileMenu.parentNode.removeChild(mobileMenu);
    });
    document.querySelector('body').appendChild(mobileMenu);
  }
});
