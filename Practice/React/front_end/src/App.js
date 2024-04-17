// import React from 'react';
// import { useState, useRef } from 'react';

// export default function App() {
// 	const [fullName, setFullName] = useState({ firstName: '', lastName: '' });

// 	const handleSubmit = e => {
// 		e.preventDefault();
// 		console.log(fullName);
// 		setFullName({
// 			firstName: '',
// 			lastName: '',
// 		});
// 	};

// 	const handleFirstName = e => {
// 		setFullName({ ...fullName, firstName: e.target.value });
// 	};

// 	const handleLastName = e => {
// 		setFullName({ ...fullName, lastName: e.target.value });
// 	};

// 	return (
// 		<div>
// 			<form onSubmit={handleSubmit} className='Form'>
// 				<input
// 					onChange={handleFirstName}
// 					value={fullName.firstName}
// 					name='firstName'
// 				/>
// 				<input
// 					onChange={handleLastName}
// 					value={fullName.lastName}
// 					name='lastName'
// 				/>
// 				<input type='submit' className='input_button' />
// 			</form>
// 		</div>
// 	);
// }

// import { useState, useRef } from 'react';
// import './style.css';

// function App() {
// 	// const variable = useRef('name');
// 	const firstName = useRef();
// 	const lastName = useRef();
// 	// const [firstName, setFirstName] = useState();
// 	// const [lastName, setLastName] = useState();

// 	const handleSubmit = e => {
// 		e.preventDefault();
// 		// console.log({ firstName, lastName });
// 		// setFirstName('');
// 		// setLastName('');
// 		firstName.current.value = '';
// 		lastName.current.value = '';
// 	};

// 	// const handleFirstName = e => {
// 	// 	setFirstName(e.target.value);
// 	// };

// 	// const handleLastName = e => {
// 	// 	setLastName(e.target.value);
// 	// };

// 	// const handleVariable = e => {
// 	// 	variable.current = e.target.value;
// 	// };
// 	return (
// 		<div>
// 			<form onSubmit={handleSubmit} className='Form'>
// 				{/* <input type='text' onChange={handleFirstName} value={firstName} />
// 				<input type='text' onChange={handleLastName} value={lastName} /> */}

// 				<input type='text' ref={firstName} />
// 				<input type='text' ref={lastName} />

// 				{/* <input type='text' onChange={handleVariable} /> */}
// 				<input type='submit' />
// 			</form>
// 			{/* {variable.current} */}
// 			{firstName}
// 		</div>
// 	);
// }

// export default App;

import { useRef } from 'react';

function App() {
	const fullName = useRef({ firstName: '', lastName: '' });

	const handleSubmit = e => {
		e.preventDefault();
		console.log({
			firstName: fullName.current.firstName,
			lastName: fullName.current.lastName,
		});
	};

	const handleFirstName = e => {
		fullName.current.firstName = e.target.value;
	};

	const handleLastName = e => {
		fullName.current.lastName = e.target.value;
	};

	// const handleFullName = e => {
	// 	fullName.current = { ...fullName.current, [e.target.name]: e.target.value };
	// };

	return (
		<div>
			<form onSubmit={handleSubmit} className='Form'>
				<input type='text' onChange={handleFirstName} name='firstName' />
				<input type='text' onChange={handleLastName} name='lastName' />
				<input type='submit' />
			</form>
		</div>
	);
}

export default App;
