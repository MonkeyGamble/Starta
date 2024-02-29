const switcher = document.querySelector('.switcher');
const header = document.querySelector('.header');
const burgerMenu = document.querySelector('.burger_menu');
const navMenu = document.querySelector('.header nav');
const accountBtn = document.querySelector('.account_btn');
const popup = document.querySelector('.popup');
const xMark = document.querySelector('.fa-xmark');
const openEye = document.querySelector('.fa-eye');
const closeEye = document.querySelector('.fa-eye-slash');
const inputPassword = document.querySelector('.login_pass');
const login_form = document.querySelector('.login_form');
const card = document.querySelector('.login_card');
const allLogins = [];

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

xMark.addEventListener('click', () => {
	popup.classList.remove('opened');
});

closeEye.addEventListener('click', () => {
	inputPassword.type = inputPassword.type === 'password' ? 'text' : 'password';
	closeEye.classList.toggle('fa-eye-slash');
	closeEye.classList.toggle('fa-eye');
});

login_form.addEventListener('submit', e => {
	e.preventDefault();

	const { email, password } = e.target;

	const new_login = {
		id: Date.now(),
		email: email.value,
		password: password.value,
	};
	allLogins.push(new_login);
	renderCards(allLogins);
	e.target.reset();
});

function renderCards(array) {
	// const container = document.createElement('div');
	// container.classList.add('logins_container');

	// const card = document.createElement('div');
	// card.classList.add('login_card');

	for (let elem of array) {
		const email = document.createElement('p');
		email.innerHTML = `<strong>Email</strong>:<br>${elem.email}`;
		const pass = document.createElement('p');
		pass.innerHTML = `<strong>Password</strong>:<br>${elem.password}`;
		card.append(email);
		card.append(pass);
		container.append(card);
		document.body.append(container);
	}
}
