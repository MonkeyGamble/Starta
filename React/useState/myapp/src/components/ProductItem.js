import React from 'react';
import { useState } from 'react';

export default function ProductItem() {
	let data = {
		name: 'Велосипед',
		count: 1,
		price: 2000,
	};

	let [product, setProduct] = useState(data);

	function decrementCount() {
		setProduct({ ...product, count: product.count - 1 });
	}

	function incrementCount() {
		setProduct({ ...product, count: product.count + 1 });
	}

	function changeCount(num) {
		let copy = { ...product };
		copy.count += num;
		setProduct(copy);
	}

	function changeNameAndPrice() {
		let copy = { ...product };
		let userInput = prompt('Введите имя и стоимость: ');
		const [name, price] = userInput.split(' ');

		// copy.name = newName;
		// copy.price = +newPrice;

		// setProduct(copy);

		setProduct({
			...product,
			name,
			price: +price,
		});
	}

	return (
		<div>
			<h2>ProductItem</h2>
			<h3>{product.name}</h3>
			<div className='count'>
				{/* <button onClick={decrementCount}>-</button> */}
				<button onClick={() => changeCount(-1)}>-</button>
				<p>{product.count}</p>
				<button onClick={() => changeCount(1)}>+</button>
			</div>
			<p>{product.price}</p>

			<button onClick={changeNameAndPrice}>change Product</button>
		</div>
	);
}
