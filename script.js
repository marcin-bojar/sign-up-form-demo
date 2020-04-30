const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const inputArr = [username, email, password, password2];

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
function checkEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.value === '') {
        showError(email, 'Email is required!');
    } else if(re.test(email.value)) {
        showSuccess(email);
    } else {
        showError(email, 'Email is not valid');
    }
};

//Input validation
// username at least 3 and not more than 20 characters
// password at least 6 and not more than 30 characters
// password confirmation

function checkInputs(inputArr) {
    inputArr.forEach(el => {
        if(el.value.trim() === '') {         
            showError(el, `${getInputName(el)} is required!`);
        } else if (el.id === 'username') {
            if(checkLength(el, 3, 20)) {
                showSuccess(el);
            };
        } else if(el.id === 'password' || el.id === 'password2') {
            if(checkLength(el, 6, 30)) {   
                passwordMatch(password, password2);
            };
        } else {
            showSuccess(el);
        }
    });
};

function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getInputName(input)} must be at least ${min} characters.`);
        return false;
    } else if (input.value.length > max) {
        showError(input, `${getInputName(input)} can't be longer than ${max} characters.`)
        return false;
    } else return true;
};

function passwordMatch(pass1, pass2) {
    if(pass1.value === pass2.value) {
        showSuccess(pass1);
        showSuccess(pass2);  
    } else {
        showError(pass1, 'Passwords don\'t match!');
        showError(pass2, 'Passwords don\'t match!');   
    }
};

function getInputName(input) {
    let inputName = input.id.charAt(0).toUpperCase() + input.id.slice(1);
    if (input.id === 'password2') inputName = 'Password';
    return inputName;
};

//Event listeners
form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs(inputArr);
    checkEmail(email);
});