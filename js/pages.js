
window.addEventListener('load', () => {
	if ('content' in document.createElement('template')) {
		console.log('pages');
		const templateHomePage = document.querySelector('.js-template-home-page');
		console.log(templateHomePage);
		const homePage = templateHomePage.content.firstElementChild.cloneNode(true);

		const mainTag = document.querySelector('main');
		mainTag.appendChild(homePage);
	}
});
