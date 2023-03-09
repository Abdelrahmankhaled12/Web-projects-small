// Get field username
let username = document.getElementById("username");

// Get field email
let email = document.getElementById("email");

// Get field password
let password = document.getElementById("password");

// Get field confirm Password
let passwor2 = document.getElementById("password");


// Function Check UserName field => valid or invalid
function userName() {
    // Regular Expression => username is least 4 character or more and digit or not
    let regUser = /[a-z]{4,}(\d+)?/gi;
    // Check valid or invalid and return value
    return regUser.test(username.value);
}

// Function Check Email field => valid or invalid
function emailCheck() {
    // Regular Expression Email
    let regEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // Check valid or invalid and return value
    return regEmail.test(email.value);
}

// Function Check Password field => valid or invalid
function passwordCheck() {
    // Regular Expression => Password must be at least 6 character
    let regPasswoed = /\w{6,}/gi;
    // Check valid or invalid and return value
    return regPasswoed.test(password.value);
}

// Function Check confirm Password field => valid or invalid
function passwordConfirm() {
    // Check password equal password2
    return password2.value == password.value && password2.value != "";
}

// Function Show Error 
function showError(input, string) {
    // Show message Error in Element small
    input.nextElementSibling.textContent = string;
    // Add class non-active in Field 
    input.classList.add("non-active");
}

// Function Success Outline
function successful(input) {
    // Delete message Error in Element small
    input.nextElementSibling.textContent = "";
    // Remove class non-active
    input.classList.remove("non-active");
    // Add class active
    input.classList.add("active");
}

// Function Submit 
document.getElementById("submit").onclick = function (event) {
    // check username true or false
    if (userName() == false) {
        // In Case False Call Function ShowError
        showError(username, "Username must be at least 4 characters");
        // Stop Send Form
        event.preventDefault();
    } else {
        // In Case True Call Function successful
        successful(username);
    }

    // check emailCheck true or false
    if (emailCheck() == false) {
        // In Case False Call Function ShowError
        showError(email, "Email is not vaild");
        // Stop Send Form
        event.preventDefault();
    } else {
        // In Case True Call Function successful
        successful(email);
    }

    // check passwordCheck true or false
    if (passwordCheck() == false) {
        // In Case False Call Function ShowError
        showError(password, "password must be at least 6 characters");
        // Stop Send Form
        event.preventDefault();
    } else {
        // In Case True Call Function successful
        successful(password);
    }

    // check passwordConfirm true or false
    if (passwordConfirm() == false) {
        // In Case False Call Function ShowError
        showError(password2, "password2 is required");
        // Stop Send Form
        event.preventDefault();
    } else {
        // In Case True Call Function successful
        successful(password2);
    }
};

