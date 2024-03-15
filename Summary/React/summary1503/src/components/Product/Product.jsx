import React from 'react';

export default function Product({ title, price, category, photo }) {
	const product_style = {
		border: `1px solid ${price > 1100 ? 'red' : 'green'}`,
		width: '250px',
		borderRadius: '25px',
		padding: '10px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '10px',
	};
	const photo_style = {
		width: '50px',
		height: '50px',
		objectFit: 'cover',
	};
	return (
		<div style={product_style}>
			<img src={photo} alt='photo' style={photo_style} />
			<p>Title: {title}</p>
			<p>Price: ${price}</p>
			<p>Category: {category}</p>
		</div>
	);
}
