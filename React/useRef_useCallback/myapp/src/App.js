import React, { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

export default function App() {
	const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

	let ulRef = useRef();
	let numberRef = useRef();
	numberRef.current = numbers;

	const handler = useCallback(() => {
		console.log('-_-_-_');
		console.log('Scroll!!!!!!!!!!');
		console.log(numbers);
		console.log(numberRef.current);
		console.log('-_-_-_');
	}, []);

	useEffect(() => {
		// ul_elem = document.querySelector('ul');
		ulRef.current.addEventListener('scroll', handler);
	}, []);

	// useEffect(() => console.log(ulRef));

	const stopScroll = () => {
		ulRef.current.removeEventListener('scroll', handler);
	};

	return (
		<div>
			<ul ref={ulRef}>
				{numbers.map(el => (
					<li key={el}>{el}</li>
				))}
			</ul>
			<button
				onClick={() => {
					setNumbers([...numbers, numbers.length + 1]);
				}}
			>
				Add New Number
			</button>
			<button onClick={stopScroll}>Stop Scroll</button>
		</div>
	);
}
