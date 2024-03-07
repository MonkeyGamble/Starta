const burger_menu = document.querySelector('.burger_menu');
const nav_list = document.querySelector('nav');

let setBurgerMenu = false;

burger_menu.onclick = () => {
	burgerMenuHandler();
};

function burgerMenuHandler() {
	if (setBurgerMenu) {
		burger_menu.classList.remove('active');
		nav_list.classList.remove('active');
		document.body.style.height = 'auto';
		document.body.style.overflow = 'unset';
	} else {
		burger_menu.classList.add('active');
		nav_list.classList.add('active');
		document.body.style.height = '100vh';
		document.body.style.overflow = 'hidden';
	}
	setBurgerMenu = !setBurgerMenu;
}

window.onresize = () => {
	if (window.innerWidth < 850) {
		if (setBurgerMenu) {
			nav_list.classList.add('active');
		} else {
			nav_list.classList.remove('active');
		}
	}
};
