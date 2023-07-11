const menuBurger = document.querySelector('.menuBurger');
const menu = document.querySelector('.menu');

menuBurger.addEventListener("click", function (event) {
    menu.classList.toggle('menuBurgerActive');
})

const screenWidth = window.screen.width;

