const addHeaderBackgroundColor = () => {
    const header = document.getElementById('header');

    this.scrollY >= 50 ? header.classList.add('header-scrolling') : header.classList.remove('header-scrolling');
};

window.addEventListener('scroll', addHeaderBackgroundColor);