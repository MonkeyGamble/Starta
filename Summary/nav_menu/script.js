const switcher = document.querySelector('.switcher');
const header = document.querySelector('.header');
const burgerMenu = document.querySelector('.burger_menu');
const navMenu = document.querySelector('.header nav');
const accountBtn = document.querySelector('.account_btn');
const popup = document.querySelector('.popup');

switcher.addEventListener('click', () => {
	switcher.classList.toggle('fa-toggle-off');
	switcher.classList.toggle('fa-toggle-on');
	header.classList.toggle('dark_mode');
});

burgerMenu.addEventListener('click', () => {
	navMenu.classList.toggle('active');
});

accountBtn.addEventListener('click', () => {
	popup.classList.add('opened');
});
