window.addEventListener('load', (Event) = > {
    console.log('page is fully loaded');
});




// hamburger menu
const toggleButton = document.getElementById('hamburger');
const navbarLinks = document.getElementById('navbar');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});

function closeMenu() {
    navbarLinks.classList.toggle('active');


    // submit button
    const submitBtn = document.getElementById('btn');
    submitBtn.addEventListener('click', (e) => {
                e.preventDefault();
                submitBtn.innerText = 'Submitted!';
            }