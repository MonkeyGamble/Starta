import React from 'react';
import User from '../User/User';

export default function UsersContainer() {
	const users_container_style = {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '10px',
	};
	const faces = [
		'https://turkeyanaclinic.com/wp-content/uploads/2023/05/Baby-Face-02.jpg',
		'https://turkeyanaclinic.com/wp-content/uploads/2023/05/Baby-Face-01.jpg',
		'https://turkeyanaclinic.com/wp-content/uploads/2023/05/Baby-Face-03.jpg',
	];
	return (
		<div style={users_container_style}>
			<User firstname='Oleg' age='28' avatar={faces[0]} />
			<User firstname='Anna' age='25' avatar={faces[1]} />
			<User firstname='Max' age='32' avatar={faces[2]} />
		</div>
	);
}
