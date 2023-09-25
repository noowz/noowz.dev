const scrollUp = () => {
	const scrollUp = document.getElementById('scroll-up');

	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () => {
  	const scrollY = window.scrollY;

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight;
	    const sectionTop = current.offsetTop - 58;
		const sectionId = current.getAttribute('id');
		const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			sectionsClass.classList.add('active-link');
		} else {
			sectionsClass.classList.remove('active-link');
		};
	});
};

window.addEventListener('scroll', scrollActive);