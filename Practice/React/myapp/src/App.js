import './App.css';
import { useState, useRef, useEffect } from 'react';

export default function App() {
	const [color, setColor] = useState('black');
	const squareRef = useRef(null);

	const changeColor = color => {
		setColor(color);
	};

	useEffect(() => {
		document.addEventListener('mousedown', e => {
			if (!squareRef.current.contains(e.target)) setColor('black');
		});
	}, []);

	return (
		<div>
			<div className='buttons'>
				<button
					className='red_button all_buttons'
					onClick={() => changeColor('red')}
				>
					Red
				</button>
				<button
					className='blue_button all_buttons'
					onClick={() => changeColor('blue')}
				>
					Blue
				</button>
				<button
					className='green_button all_buttons'
					onClick={() => changeColor('green')}
				>
					Green
				</button>
				<button
					className='yellow_button all_buttons'
					onClick={() => changeColor('yellow')}
				>
					Yellow
				</button>
				<button
					className='purple_button all_buttons'
					onClick={() => changeColor('purple')}
				>
					Purple
				</button>
			</div>
			<div
				className='black_square'
				style={{ backgroundColor: color }}
				ref={squareRef}
			></div>
		</div>
	);
}
