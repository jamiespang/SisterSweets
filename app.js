window.addEventListener('load', (Event) => {
    console.log('page is fully loaded');
});

function myFunction(x) {
    x.classList.toggle("change");
    document.getElementById('mobile').classList.toggle("show-menu");
};