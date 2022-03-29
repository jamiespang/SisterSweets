window.addEventListener('load', (Event) => {
    console.log('page is fully loaded');
});

function myFunction(x) {
    x.classList.toggle("change");
    document.getElementById('Jamie').classList.toggle("show-menu");
};

//verify email//


// submit button//

function submitEmail(element) {
    element.innerHTML = "Submitted!";
}