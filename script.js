const menuBtn  = document.getElementById('menu-btn');   
const navClose = document.getElementById('nav-close');  
const navbar   = document.querySelector('.navbar');      
const header   = document.querySelector('.header');      
const navLinks = document.querySelectorAll('.navbar a');

menuBtn.addEventListener('click', () => {
    navbar.classList.add('active');
});

navClose.addEventListener('click', () => {
    navbar.classList.remove('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('active');     
    } else {
        header.classList.remove('active');
    }
});