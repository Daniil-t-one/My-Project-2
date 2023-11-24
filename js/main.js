const burgerMenu = document.querySelector('.burger_menu')
const menu = document.querySelector('.menu')


burgerMenu.addEventListener('click', function() {
  this.classList.toggle('active');
  menu.classList.toggle('open');
})
