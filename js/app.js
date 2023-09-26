document.addEventListener('DOMContentLoaded', () => {

    let menuBurger = document.querySelector('.menu__burger');
    let menu = document.querySelector('.header__nav')

    menuBurger.onclick = (e) => {
        e.preventDefault();

        menuBurger.classList.toggle('menu__burger--active')
        menu.classList.toggle('nav--active')
    }
});