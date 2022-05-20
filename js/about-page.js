window.addEventListener('load', () => {
  if ('content' in document.createElement('template')) {
    const aboutPageLink = document.querySelector('.js-about-page-link');
    aboutPageLink.addEventListener('click', () => {
      const homePage = document.querySelector('.js-home-page');
      if (homePage) homePage.parentNode.removeChild(homePage);

      const aboutPage = document.querySelector('.js-about-page');
      if (aboutPage === null) {
        const templateAboutPage = document.querySelector('.js-template-about-page');
        const aboutPage = templateAboutPage.content.firstElementChild.cloneNode(true);

        const mainTag = document.querySelector('main');
        mainTag.appendChild(aboutPage);
      }
    });

    const homePagetLink = document.querySelector('.js-home-page-link');
    homePagetLink.addEventListener('click', () => {
      const aboutPage = document.querySelector('.js-about-page');
      if (aboutPage) aboutPage.parentNode.removeChild(aboutPage);

      const homePage = document.querySelector('.js-home-page');
      if (homePage === null) {
        const templateHomePage = document.querySelector('.js-template-home-page');
        const aboutPage = templateHomePage.content.firstElementChild.cloneNode(true);
        const mainTag = document.querySelector('main');
        mainTag.appendChild(aboutPage);
      }
    });
  }
});
