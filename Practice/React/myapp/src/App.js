import { useRef, useState } from 'react';
import './App.css';

export default function App() {
	const [selectedItems, setSelectedItems] = useState([]);
	const [active, setActive] = useState(false);
	const ref = useRef(null);
	let items = [
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

	const handleCheck = e => {
		if (e.target.checked) setSelectedItems([...selectedItems, e.target.value]);
		else
			setSelectedItems(selectedItems.filter(elem => elem !== e.target.value));
	};

	const handleFocus = () => {
		setActive(true);
	};

	const clickOutside = e => {
		if (!ref.current.contains(e.target)) setActive(false);
	};

	return (
		<div className='container' onClick={clickOutside}>
			<input
				className='text_input'
				value={selectedItems.join(', ')}
				onFocus={handleFocus}
				ref={ref}
				readOnly
			/>
			{active && (
				<ul>
					{items.map(elem => (
						<div className='items' key={elem.id}>
							<input type='checkbox' value={elem.name} onChange={handleCheck} />
							<li>{elem.name}</li>
						</div>
					))}
				</ul>
			)}
		</div>
	);
}
