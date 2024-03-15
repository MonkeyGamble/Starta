import React from 'react';

export default function User({ firstname, age, avatar }) {
	const user_style = {
		border: '1px solid black',
		width: '250px',
		borderRadius: '25px',
		padding: '10px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '10px',
		backgroundColor: age < 30 ? 'lightblue' : 'lightgreen',
	};

	const img_style = {
		width: '50px',
		height: '50px',
		objectFit: 'cover',
	};

	return (
		<div style={user_style}>
			<img src={avatar} alt='photo' style={img_style} />
			<p>Name: {firstname}</p>
			<p>Age: {age}</p>
		</div>
	);
}
