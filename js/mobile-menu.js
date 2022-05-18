let hamburgerMenu = document.querySelector('.js-humburger-menu-icon');
hamburgerMenu.addEventListener('click', (event) => {
	if ('content' in document.createElement('template')) {
		const templateMobileMenu = document.querySelector('.js-template-mobile-menu');
		const mobileMenu = templateMobileMenu.content.firstElementChild.cloneNode(true);
		
		const closeIcon = mobileMenu.querySelector('.close-icon');
		closeIcon.addEventListener('click', (event) => {
			templateMobileMenu.parentNode.removeChild(mobileMenu);
		});
		document.querySelector('body').appendChild(mobileMenu);
	}
});

