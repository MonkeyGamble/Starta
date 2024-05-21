import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
	const [selected, setSelected] = useState([]);
	const ref = useRef(null);

	const items = [
		{ id: 1, name: 'item1' },
		{ id: 2, name: 'item2' },
		{ id: 3, name: 'item3' },
		{ id: 4, name: 'item4' },
		{ id: 5, name: 'item5' },
	];

	const handleClick = e => {
		if (e.target.checked) setSelected([...selected, e.target.value]);
		else setSelected(selected.filter(item => item != e.target.value));
	};

	return (
		<div ref={ref}>
			<input value={selected.join(',')} readOnly />

			<ul>
				{items.map(item => (
					<div key={item.id} className='items'>
						<input type='checkbox' value={item.name} onClick={handleClick} />
						<li>{item.name}</li>
					</div>
				))}
			</ul>
		</div>
	);
}

export default App;
