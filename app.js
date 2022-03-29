window.addEventListener('load', (Event) => {
    console.log('page is fully loaded');
});
}
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
// submit button//
const submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    submit.innerText = 'Submitted!';
});