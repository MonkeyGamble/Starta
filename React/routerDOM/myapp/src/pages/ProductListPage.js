import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
					<li key={elem.id}>
						<Link to={`/products/${elem.id}`}>
							{`${elem.id}. ${elem.title}`}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
