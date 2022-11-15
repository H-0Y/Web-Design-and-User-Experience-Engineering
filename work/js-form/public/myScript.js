"use strict";


const formE1 = document.querySelector('.register')
// select username part
const usernameGroupE1 = document.querySelector('.register-username');
const usernameInputE1 = document.querySelector('.register-username-input');
// select email part
const emailGroupE1 = document.querySelector('.register-email');
const emailInputE1 = document.querySelector('.register-email-input');
const emailErrorE1 = document.querySelector('.register-email__error');
// select confirm part
const confirmGroupE1 = document.querySelector('.register-confirm');
const confirmInputE1 = document.querySelector('.register-confirm-input');
const confirmErrorE1 = document.querySelector('.register-confirm__error');

// validation for all required fields when submitting
formE1.addEventListener('submit', event => {
    // reset all error information
    let isInvalid = false;
    usernameGroupE1.classList.remove('register-username--invalid');
    emailErrorE1.innerText = "";
    confirmErrorE1.innerText = "";

    if(!usernameInputE1.value) {
        usernameGroupE1.classList.add('register-username--invalid');
        isInvalid = true;
    }
    if(!usernameInputE1.value) {
        usernameGroupE1.classList.add('register-username--invalid');
        isInvalid = true;
    }

    if(!emailInputE1.value) {
        emailErrorE1.innerText = "( email is required )";
        isInvalid = true;
    }

    if(emailInputE1.value != confirmInputE1.value) {
        confirmErrorE1.innerText = "( email does not match )";
        isInvalid = true;
    }
    // prevent submit if not all fields are valid
    if(isInvalid) {
        event.preventDefault();
    }
})

// validate username field when changed
usernameGroupE1.addEventListener('change', event => {
    usernameGroupE1.classList.remove('register-username--invalid');
    
    if(!usernameInputE1.value) {
        usernameGroupE1.classList.add('register-username--invalid');
    }
})

//validate email and confirm email field when changed
// emailGroupE1.addEventListener('change', event => {
//     emailErrorE1.innerText = "";
//     confirmErrorE1.innerText = "";
    
//     if(!emailInputE1.value) {
//         emailErrorE1.innerText = "( email is required )";
//     }
//     if(emailInputE1.value != confirmInputE1.value) {
//         confirmErrorE1.innerText = "( email does not match )";
//     }
// })

// validate confirm field when changed
// confirmGroupE1.addEventListener('change', event => {
//     confirmErrorE1.innerText = "";
//     if(emailInputE1.value != confirmInputE1.value) {
//         confirmErrorE1.innerText = "( email does not match )";
//     }
// })

const submitE1 = document.querySelector('.register-submit');
submitE1.addEventListener('mouseenter', e => submitE1.classList.add('register-submit--active'));
submitE1.addEventListener('mouseleave', e => submitE1.classList.remove('register-submit--active'));
submitE1.addEventListener('focus', e => submitE1.classList.add('register-submit--active'));
submitE1.addEventListener('blur', e => submitE1.classList.remove('register-submit--active'));