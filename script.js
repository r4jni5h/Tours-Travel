window.addEventListener("scroll", function() {
    let header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 50);
});