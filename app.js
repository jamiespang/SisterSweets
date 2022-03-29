window.addEventListener('load', (Event) => {
    console.log('page is fully loaded');
});
}

function myFunction(x) {
    x.classList.toggle("change");

}
//verify email//

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}
// submit button//
const submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    submit.innerText = 'Submitted!';
});

fname