/***** burger menu *****/

const burgerMenu = document.querySelector(".header__burger__menu_btn");
const navIsOpen = document.querySelector(".nav__animation");

burgerMenu.addEventListener("click", () => {
    navIsOpen.classList.toggle("nav__isOpen");
    burgerMenu.classList.toggle("is-active");
});