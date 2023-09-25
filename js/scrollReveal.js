const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true
});

scrollReveal.reveal(`.home__data, .home__social, .contact__container, .footer__container`);
scrollReveal.reveal(`.home__image`, { origin: 'bottom' });
scrollReveal.reveal(`.about__data, .skills__data`, { origin: 'left' });
scrollReveal.reveal(`.about__image, .skills__content`, { origin: 'right' });
scrollReveal.reveal(`.services__card, .projects__card`, { interval: 100 });