import { useState } from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri';

export default function ProductItem(props) {
	const { id, name, price, count, remove } = props;

	const [counter, setCounter] = useState(count);

	return (
		<div className='product_card'>
			<RiDeleteBin2Line
				className='remove_bin'
				onClick={() => {
					remove(id);
				}}
			/>
			<h2>{name}</h2>
			<h3>Price: ${price}</h3>
			<div className='counter'>
				<button
					onClick={() => {
						setCounter(counter + 1);
					}}
				>
					+
				</button>
				<h4>Count: {counter}</h4>
				<button
					onClick={() => {
						counter > 0 && setCounter(counter - 1);
					}}
				>
					-
				</button>
			</div>
		</div>
	);
}
