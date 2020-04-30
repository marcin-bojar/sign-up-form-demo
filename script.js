const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show error ouline and message
function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.className= 'form-group error';
    formGroup.querySelector('small').textContent = message;
};

//Show success outline
function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group success';
};

//Email validator
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

//Event listeners
form.addEventListener('submit', e => {
    e.preventDefault();

    if(username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }

    if(email.value === '') {
        showError(email, 'Email is required');
    } else if(!validateEmail(email.value)) {
        showError(email, 'Email address is not valid');
    } else {
        showSuccess(email);
    }

    if(password.value === '') {
        showError(password, 'Password is required');
    } else {
        showSuccess(password);
    }

    if(password2.value === '') {
        showError(password2, 'Password confirmation is required');
    } else {
        showSuccess(password2);
    }
});