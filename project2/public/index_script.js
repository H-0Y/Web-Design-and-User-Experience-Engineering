"use strict";


const linkE1 = document.querySelector('.skip-link');
const menuE1 = document.querySelector('.menu');
const ulE1 = document.querySelector('.menu-ul');
menuE1.addEventListener("click", event => {
    ulE1.classList.toggle("open");
    
})

linkE1.addEventListener('focus', e => linkE1.classList.add('skip-link--active'));
linkE1.addEventListener('blur', e => linkE1.classList.remove('skip-link--active'));