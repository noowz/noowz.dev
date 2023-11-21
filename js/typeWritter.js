let typeWritterHome;
let typeWritterFooter;

if (window.location.pathname === '/lang/pt/' || window.location.pathname === '/lang/pt' || window.location.pathname === '/lang/pt/index.html') {
	typeWritterHome = new Typed('.typewritter__home', {
		strings: [
			'Desenvolvedor Web',
			'Tradutor',
			'Estudante'
		],
		startDelay: 1000,
		typeSpeed: 100,
		backSpeed: 100,
		loop: true,
		loopCount: Infinity
	});
	
	typeWritterFooter = new Typed('.typewritter__footer', {
		strings: [
			'Desenvolvedor Web',
			'Tradutor',
			'Estudante'
		],
		startDelay: 1000,
		typeSpeed: 100,
		backSpeed: 100,
		loop: true,
		loopCount: Infinity
	});
} else if (window.location.pathname === '/lang/fr/' || window.location.pathname === '/lang/fr' || window.location.pathname === '/lang/fr/index.html') {
	typeWritterHome = new Typed('.typewritter__home', {
		strings: [
			'Développeur Web',
			'Traducteur',
			'Étudiant'
		],
		startDelay: 1000,
		typeSpeed: 100,
		backSpeed: 100,
		loop: true,
		loopCount: Infinity
	});
	
	typeWritterFooter = new Typed('.typewritter__footer', {
		strings: [
			'Développeur Web',
			'Traducteur',
			'Étudiant'
		],
		startDelay: 1000,
		typeSpeed: 100,
		backSpeed: 100,
		loop: true,
		loopCount: Infinity
	});
} else {
	typeWritterHome = new Typed('.typewritter__home', {
		strings: [
			'Web Developer',
			'Translator',
			'Student'
		],
		startDelay: 1000,
		typeSpeed: 100,
		backSpeed: 100,
		loop: true,
		loopCount: Infinity
	});

	typeWritterFooter = new Typed('.typewritter__footer', {
		strings: [
			'Web Developer',
			'Translator',
			'Student'
		],
		startDelay: 1000,
		typeSpeed: 100,
		backSpeed: 100,
		loop: true,
		loopCount: Infinity
	});
};