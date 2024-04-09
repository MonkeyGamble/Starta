import React from 'react';
import { useState } from 'react';

export default function UserList() {
	let data = [
		{ id: 1, name: 'Alex', age: 30, salary: 3400 },
		{ id: 2, name: 'Steven', age: 28, salary: 1300 },
		{ id: 3, name: 'Neena', age: 24, salary: 4540 },
		{ id: 4, name: 'Willyam', age: 33, salary: 900 },
	];

	let [users, setUsers] = useState(data);

	function removeFirstUser() {
		// let newUsers = users.slice(1);
		// setUsers(newUsers);

		//2 вариант
		// let copyUsers = [...users];
		// copyUsers.shift();
		// setUsers(copyUsers);

		//3 вариант
		let filteredUsers = users.filter((_, index) => index !== 0);
		setUsers(filteredUsers);
	}

	function removeLastUser() {
		// let newUsers = [...users];
		// newUsers.pop();
		// setUsers(newUsers);

		// let newUsers = users.slice(0, -1);
		// setUsers(newUsers);

		let filteredUsers = users.filter((_, index) => index !== users.length - 1);
		setUsers(filteredUsers);
	}

	// 1) Сделайте кнопку, которая будет увеличивать зарплату сотрудников на 10% (округляя по правилам математики)
	function changeSalary() {
		let changedUsers = users.map(elem => ({
			...elem,
			salary: Math.round(elem.salary * 1.1),
		}));
		setUsers(changedUsers);
	}

	// 2) Сделайте кнопку, которая будет фильтровать сотрудников по возрасту (от 30 лет включительно)

	function ageFilter() {
		let ageFilter = users.filter(elem => elem.age >= 30);
		setUsers(ageFilter);
	}

	// 3) Реализуйте удалению сотрудников по нажатию на карточку (по клику) (по id)

	function removeUser(id) {
		let removedUser = users.filter(elem => elem.id !== id);
		setUsers(removedUser);
	}

	// Реализуйте кнопку, которая будет сортировать пользователей по зарплате (по возрастанию)

	function sortAscSalary() {
		let sortedUsers = [...users].sort((a, b) => a.salary - b.salary);
		// let sortedUsers = users.slice().sort((a, b) => a.salary - b.salary);
		setUsers(sortedUsers);
	}

	function sortDescSalary() {
		let sortedUsers = [...users].sort((a, b) => b.salary - a.salary);
		// let sortedUsers = users.slice().sort((a, b) => b.salary - a.salary);
		setUsers(sortedUsers);
	}

	function addNewUser() {
		let newUser = {
			id: Math.max(users.map(elem => elem.id)) + 1,
			name: prompt('Enter the Name: '),
			age: +prompt('Enter Age: '),
			salary: +prompt('Enter Salary: '),
		};
		setUsers([...users, newUser]);
	}

	return (
		<div>
			<h2>Users</h2>
			<button onClick={removeFirstUser}>Remove first user</button>
			<button onClick={removeLastUser}>Remove last user</button>
			<button onClick={changeSalary}>Change Salary 10%</button>
			<button onClick={ageFilter}>Age more than 30</button>
			<button onClick={sortAscSalary}>Ascending Sort by Salary</button>
			<button onClick={sortDescSalary}>Descending Sort by Salary</button>
			<button onClick={addNewUser}>Add New User</button>

			<div className='user_wrapper'>
				{users.map(elem => (
					<div key={elem.id} onClick={() => removeUser(elem.id)}>
						<h3>{elem.name}</h3>
						<p>Age: {elem.age}</p>
						<p>Salary: {elem.salary}</p>
					</div>
				))}
			</div>
		</div>
	);
}
