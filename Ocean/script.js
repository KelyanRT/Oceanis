const burger = document.querySelector('.burger');
const menu = document.querySelector('nav ul');
const header = document.querySelector('header');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    header.classList.toggle('expanded');
});
