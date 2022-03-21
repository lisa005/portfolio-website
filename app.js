// Scroll to top button

var scrollToTopBtn = document.getElementById("pageup__btn");
var rootElement = document.documentElement;

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

scrollToTopBtn.addEventListener("click", scrollToTop);

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
