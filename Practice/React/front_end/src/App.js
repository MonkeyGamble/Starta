import React from 'react';
import { useState } from 'react';

export default function App() {
	const [fullName, setFullName] = useState({ firstName: '', lastName: '' });

	const handleSubmit = e => {
		e.preventDefault();
		console.log(fullName);
		setFullName({
			firstName: '',
			lastName: '',
		});
	};

	const handleFirstName = e => {
		setFullName({ ...fullName, firstName: e.target.value });
	};

	const handleLastName = e => {
		setFullName({ ...fullName, lastName: e.target.value });
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleFirstName}
					value={fullName.firstName}
					name='firstName'
				/>
				<input
					onChange={handleLastName}
					value={fullName.lastName}
					name='lastName'
				/>
				<input type='submit' className='input_button' />
			</form>
		</div>
	);
}
