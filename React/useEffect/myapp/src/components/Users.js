import { useState, useEffect } from 'react';

export default function Users() {
	let [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(data => {
				console.log('Результат сетевого запроса');
				setUsers(data);
			});
	}, []);

	return (
		<div>
			<h2>User List Component</h2>
			<ul>
				{users.map(elem => (
					<li key={elem.id}>{elem.name}</li>
				))}
			</ul>
		</div>
	);
}
