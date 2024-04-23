import React, { useEffect } from 'react';
import { useState } from 'react';

export default function ProductListPage() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch('https://dummyjson.com/products')
			.then(res => res.json())
			.then(data => setProducts(data.products));
	});

	return (
		<div className='content'>
			<ul>
				{products.map(elem => (
					<li key={elem.id}>{`${elem.id}. ${elem.title}`}</li>
				))}
			</ul>
		</div>
	);
}
