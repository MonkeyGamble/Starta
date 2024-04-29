import './style.css';
import ProductItem from './components/ProductItem';
import { useState } from 'react';

export default function App() {
	const data = [
		{ id: 1, name: 'Велосипед', price: 1000, count: 1 },
		{ id: 2, name: 'Самокат', price: 700, count: 1 },
		{ id: 3, name: 'Ролики', price: 1300, count: 2 },
		{ id: 4, name: 'Сноуборд', price: 19000, count: 4 },
	];

	const [dataArray, setDataArray] = useState(data);

	const addProductItem = e => {
		e.preventDefault();
		const name = prompt('Введите название товара:');
		const price = prompt('Введите цену товара:');
		const count = prompt('Введите кол-во товара:');

		if (name && price && count) {
			const newItem = {
				id: dataArray.length + 1,
				name,
				price: +price,
				count: +count,
			};
			setDataArray([...dataArray, newItem]);
		} else {
			alert('Вы заполнили не все поля!');
		}
	};

	const removeItem = id => {
		let newDataArray = dataArray.filter(elem => {
			return elem.id !== id;
		});
		setDataArray(newDataArray);
	};

	return (
		<div className='wrapper'>
			<div className='product_container'>
				{dataArray.map(elem => (
					<div key={elem.id}>
						<ProductItem
							id={elem.id}
							name={elem.name}
							price={elem.price}
							count={elem.count}
							remove={removeItem}
						/>
					</div>
				))}
			</div>
			<button className='add_item_button' onClick={addProductItem}>
				Add an Item
			</button>
		</div>
	);
}
