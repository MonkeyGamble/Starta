import React, { useContext } from 'react';
import { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { ProductContext } from '../context/ProductContext';

export default function ProductItem(props) {
	const { id, name, price } = props;
	const { removeItem } = useContext(ProductContext);

	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};
	const decrement = () => {
		setCount(count - 1);
	};

	return (
		<div className='product_item'>
			<MdDeleteForever
				className='delete_button'
				onClick={() => removeItem(id)}
			/>
			<h2>{name}</h2>
			<h3>{price}</h3>
			<div className='count'>
				<button onClick={increment}>+</button>
				<p>{count}</p>
				<button onClick={decrement}>-</button>
			</div>
		</div>
	);
}
