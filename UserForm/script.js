let users_wrapper = document.querySelector('.users_wrapper');
let add_form = document.querySelector('.add_form');
let remove_form = document.querySelector('.remove_form');
let update_form = document.querySelector('.update_form');

// add_form.onsubmit = (e) => {
//     e.preventDefault()
//     let form_data = new FormData(add_form)
//     let data = Object.fromEntries(form_data)
//     console.log(data)
// }

// Обработчик формы
add_form.addEventListener('submit', e => {
	e.preventDefault();
	let form_data = new FormData(add_form);
	let data = Object.fromEntries(form_data);
	createNewUser(data);
	console.log(data);
});

remove_form.addEventListener('submit', e => {
	e.preventDefault();
	let form_data = new FormData(remove_form);
	let id = form_data.get('id');
	deleteUser(id);
});

update_form.addEventListener('submit', e => {
	e.preventDefault();
	let form_data = new FormData(update_form);
	let { id, ...user_data } = Object.fromEntries(form_data);
	updateUser(id, user_data);
});

// Сетевые запросы
async function getUsers() {
	let url = 'http://212.8.247.94:3050/users';
	try {
		let res = await fetch(url);
		let data = await res.json();
		render(data);
	} catch (error) {
		console.error('Error', error);
	}
}

// function getUsers() {
// 	let url = 'http://212.8.247.94:3050/users';
// 	fetch(url)
// 		.then(res => res.json())
// 		.then(data => render(data));
// }
async function createNewUser(obj) {
	try {
		let url = 'http://212.8.247.94:3050/user/create';
		let res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(obj),
		});
		let data = await res.json();
		console.log(data);
		await getUsers();
	} catch (e) {
		console.log(e);
	}
}

// function createNewUser(obj) {
// 	let url = 'http://212.8.247.94:3050/user/create';
// 	fetch(url, {
// 		method: 'POST',
// 		headers: {
// 			'Content-type': 'application/json',
// 		},
// 		body: JSON.stringify(obj),
// 	})
// 		.then(res => res.json())
// 		.then(data => {
// 			console.log(data);
// 			getUsers();
// 		})
// 		.catch(e => console.log(e));
// }

async function deleteUser(id) {
	try {
		let url = `http://212.8.247.94:3050/users/${id}`;
		let res = await fetch(url, { method: 'DELETE' });
		let data = await res.json();
		console.log(data);
		await getUsers();
	} catch (e) {
		console.log(e);
	}
}

// function deleteUser(id) {
// 	let url = `http://212.8.247.94:3050/users/${id}`;
// 	fetch(url, { method: 'DELETE' })
// 		.then(res => res.json())
// 		.then(data => {
// 			console.log(data);
// 			getUsers();
// 		});
// }

async function updateUser(id, data) {
	try {
		let url = `http://212.8.247.94:3050/users/${id}`;
		let res = await fetch(url, {
			method: 'PATCH',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		let dataRes = await res.json();
		console.log(dat.dataResa);
		await getUsers();
	} catch (e) {
		console.log(e);
	}
}

// function updateUser(id, data) {
// 	let url = `http://212.8.247.94:3050/users/${id}`;
// 	fetch(url, {
// 		method: 'PATCH',
// 		headers: {
// 			'Content-type': 'application/json',
// 		},
// 		body: JSON.stringify(data),
// 	})
// 		.then(res => res.json())
// 		.then(data => {
// 			console.log(data);
// 			getUsers();
// 		});
// }

// Рендер карточек

async function render(array) {
	try {
		users_wrapper.innerHTML = '';
		for (let elem of array.reverse()) {
			let div_card = document.createElement('div');
			let h_name = document.createElement('h2');
			let p_age = document.createElement('p');
			let p_job_salary = document.createElement('p');
			let p_id = document.createElement('p');

			div_card.className = 'user_card';
			h_name.innerText = elem.name;
			p_age.innerText = 'Age: ' + elem.age;
			p_job_salary.innerText = `Job: ${elem.job_id}, Salary: ${elem.salary}`;
			p_id.innerText = 'ID: ' + elem.id;

			div_card.append(h_name, p_age, p_job_salary, p_id);
			users_wrapper.append(div_card);
		}
	} catch (e) {
		console.log(e);
	}
}

// function render(array) {
// 	users_wrapper.innerHTML = '';
// 	for (let elem of array.reverse()) {
// 		let div_card = document.createElement('div');
// 		let h_name = document.createElement('h2');
// 		let p_age = document.createElement('p');
// 		let p_job_salary = document.createElement('p');
// 		let p_id = document.createElement('p');

// 		div_card.className = 'user_card';
// 		h_name.innerText = elem.name;
// 		p_age.innerText = 'Age: ' + elem.age;
// 		p_job_salary.innerText = `Job: ${elem.job_id}, Salary: ${elem.salary}`;
// 		p_id.innerText = 'ID: ' + elem.id;

// 		div_card.append(h_name, p_age, p_job_salary, p_id);
// 		users_wrapper.append(div_card);
// 	}
// }

getUsers();

// Задача 1     Изменить все сетевый функции используя async/await
// * Задача 2   Вместо карточек рализовать таблицу в разметке

// https://www.w3schools.com/tags/tag_table.asp
// https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics
