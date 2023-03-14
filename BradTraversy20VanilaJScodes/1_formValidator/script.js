const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordTwo = document.getElementById('passwordTwo');

// check if error
function showError (input, message) {
    const formControl = input.parentElement;
    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// check if success
function showSuccess (input) {
    const formControl = input.parentElement;
    formControl.classList.add('success');
}

// check email validation
function checkEmail (input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (re.test(input.value.trim())) {
        showSuccess(input);

    } else {
        showError(input, 'Email is not valid!');
    }
}

// check password
function checkPasswordsMatch (inputOne, inputTwo) {
    if (inputOne.value !== inputTwo.value) {
        showError(inputTwo, `Passwords do not match!`)
    }
}

// check required fields
function checkRequired (inputArr) {
    inputArr.forEach( input => {
       if (input.value.trim() === "") {
        showError(input, `${getFieldName(input)} is required`);

       } else {
        showSuccess(input);
       }
    });
}
// check length
function checkLength (input, min, max) {
    if(input.value.length < min) {
        showError (input, `${getFieldName(input)} must be at least ${min} characters`);
    
    } else if(input.value.length > max) {
        showError (input, `${getFieldName(input)} must be less than ${max} characters`);

    } else {
        showSuccess(input);
    }   
}   

// get fieldName
function getFieldName (input) {
    // capitalizing the first latter and adding the rest
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([username, email, password, passwordTwo]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkLength(passwordTwo, 6, 25);
    checkEmail(email)
    checkPasswordsMatch(password, passwordTwo);
});