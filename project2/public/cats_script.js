"use strict";

const linkE1 = document.querySelector('.skip-link');
const menuE1 = document.querySelector('.menu');
const ulE1 = document.querySelector('.menu-ul');
menuE1.addEventListener("click", event => {
    ulE1.classList.toggle("open");
    
})

linkE1.addEventListener('focus', e => linkE1.classList.add('skip-link--active'));
linkE1.addEventListener('blur', e => linkE1.classList.remove('skip-link--active'));

const modal = document.getElementById("myModal");

// Get the links that opens the modal
const links = document.querySelectorAll(".subscribe-link");

// Get the <div> element that closes the modal
const close = document.querySelector(".close");

// When the user clicks the link, open the modal 
for(var i = 0; i < links.length; i++) {
    links[i].onclick = function() {
        modal.style.display = "block";
    }
}


close.addEventListener("click", event => {
    modal.style.display = "none";
    
})

document.addEventListener('keyup', function (event) {
    if(event.key === "Escape") {
        modal.style.display = "none";
    }
    
});


const emailInputE1 = document.querySelector(".subscribe-email-input");
const emailErrorE1 = document.querySelector(".subscribe-email__error");
//validate email field when changed
emailInputE1.addEventListener('change', event => {
    emailErrorE1.innerText = "";
    
    const x=emailInputE1.value;
    const atpos=x.indexOf("@");
    
    if (atpos < 1){
        emailErrorE1.innerText = "The field should be a valid email address including a @"
    }
    if(!emailInputE1.value) {
        emailErrorE1.innerText = "The field is required";
    }
})

//validate when submit form
const formE1 = document.querySelector('.subscribe');
const confirmInputE1 = document.querySelector('.subscribe-confirm-input');
const confirmErrorE1 = document.querySelector('.subscribe-confirm__error');
formE1.addEventListener('submit', event => {
    // reset all error information
    let isInvalid = false;
    
    emailErrorE1.innerText = "";
    confirmErrorE1.innerText = "";

    if(!emailInputE1.value) {
        emailErrorE1.innerText = "The field is required";
        isInvalid = true;
    }

    if(emailInputE1.value != confirmInputE1.value) {
        confirmErrorE1.innerText = "The field must match the provided email address";
        isInvalid = true;
    }
    // prevent submit if not all fields are valid
    if(isInvalid) {
        event.preventDefault();
    }
})








// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }