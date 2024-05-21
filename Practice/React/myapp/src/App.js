import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
	const [selected, setSelected] = useState([]);
	const [isFocused, setIsFocused] = useState(false);
	const ref = useRef(null);
	const refUl = useRef(null);
	const refSVG = useRef(null);

	const items = [
		{ id: 1, name: 'item1' },
		{ id: 2, name: 'item2' },
		{ id: 3, name: 'item3' },
		{ id: 4, name: 'item4' },
		{ id: 5, name: 'item5' },
	];

	const handleClick = e => {
		const value = e.target.value;
		if (e.target.checked) {
			setSelected(prevSelected => [...prevSelected, value]);
		} else {
			setSelected(prevSelected => prevSelected.filter(item => item !== value));
		}
	};

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleClickOutside = e => {
		if (
			!ref.current.contains(e.target) &&
			refUl.current &&
			!refUl.current.contains(e.target) &&
			refSVG.current &&
			!refSVG.current.contains(e.target)
		) {
			setIsFocused(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div>
			<div>
				<input
					value={selected.join(',')}
					readOnly
					onFocus={handleFocus}
					ref={ref}
				/>
				{selected.length > 0 && (
					<svg
						ref={refSVG}
						onClick={() => {
							setSelected([]);
						}}
						width='20' 
						height='20'
						viewBox='0 0 16 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='m10.5 5.5-5 5M5.5 5.5l5 5'
							stroke='#272A37'
							strokeWidth='1.4'
							strokeLinecap='round'
						></path>
					</svg>
				)}
			</div>

			{isFocused && (
				<ul className='ul' ref={refUl}>
					{items.map(item => (
						<li key={item.id} className='items'>
							<label>
								<input
									type='checkbox'
									value={item.name}
									onChange={handleClick}
								/>
								{item.name}
							</label>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default App;
