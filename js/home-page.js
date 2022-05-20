window.addEventListener('load', () => {
  if ('content' in document.createElement('template')) {
    const templateHomePage = document.querySelector('.js-template-home-page');
    const homePage = templateHomePage.content.firstElementChild.cloneNode(true);

    const mainTag = document.querySelector('main');
    mainTag.appendChild(homePage);
  }
});
