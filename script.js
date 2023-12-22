const menuIcon = document.querySelector('.fa-bars');
const menu = document.querySelector('#menu');
console.log(menu)
menuIcon.addEventListener('click', function() {
    menu.classList.toggle('active')
});