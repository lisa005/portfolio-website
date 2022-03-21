// Hamburger menu 

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav__list');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});
