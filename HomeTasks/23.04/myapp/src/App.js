import React from 'react';
import './style.css';
import ProductList from './components/ProductList';
import { ProductContext } from '../src/context/ProductContext';
import { useState } from 'react';

export default function App() {
	const data = [
		{ id: 1, name: 'Велосипед', price: 1000, count: 1 },
		{ id: 2, name: 'Самокат', price: 700, count: 1 },
		{ id: 3, name: 'Ролики', price: 1300, count: 2 },
		{ id: 4, name: 'Сноуборд', price: 19000, count: 4 },
	];

	const [products, setProducts] = useState(data);

	const removeItem = id => {
		let filteredProducts = data.filter(elem => elem.id !== id);
		setProducts(filteredProducts);
	};

	return (
		<div className='product_wrapper'>
			<ProductContext.Provider value={{ removeItem }}>
				<ProductList data={products} />
				<button>Add Product</button>
			</ProductContext.Provider>
		</div>
	);
}
