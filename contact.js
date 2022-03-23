// Displays modal after form submit 

var modal = document.getElementById("submit__modal");
var btn = document.getElementById("submit__btn");
var span = document.getElementsByClassName("close__btn")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}
// Sends form data to email 

const contactForm = document.getElementById('contact__form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let nameInput = contactForm.querySelector('input[name="name"]');
    let emailInput = contactForm.querySelector('input[name="email"]');
    let messageInput = contactForm.querySelector('textarea[name="message"]');

    fetch("https://formsubmit.co/ajax/lisasuzuki1@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            sender: nameInput.value, 
            email: emailInput.value,
            message: messageInput.value
        }) 
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .then(contactForm.reset())
        .then(resetForm)
        .catch(error => console.log(error));
});

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

