import './App.css';
import { useState } from 'react';

export default function App() {
	const [selectedItems, setSelectedItems] = useState([]);

	let arrayObj = [
		{
			id: 1,
			name: 'item1',
		},
		{
			id: 2,
			name: 'item2',
		},
		{
			id: 3,
			name: 'item3',
		},
		{
			id: 4,
			name: 'item4',
		},
		{
			id: 5,
			name: 'item5',
		},
	];

	const handleClick = e => {
		if (e.target.checked) setSelectedItems([...selectedItems, e.target.value]);
		else
			setSelectedItems(selectedItems.filter(elem => elem !== e.target.value));
	};

	return (
		<div className='container'>
			<input className='text_input' value={selectedItems.join(', ')} readOnly />

			<ul>
				{arrayObj.map(elem => (
					<div className='items' key={elem.id}>
						<input type='checkbox' value={elem.name} onClick={handleClick} />
						<li>{elem.name}</li>
					</div>
				))}
			</ul>
		</div>
	);
}
