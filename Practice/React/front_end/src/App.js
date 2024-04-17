import React, { useEffect } from 'react';
import { useState } from 'react';

export default function App() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log('hi');
	}, [count]);

	return (
		<div>
			{count}
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				+
			</button>
			<button
				onClick={() => {
					setCount(count - 1);
				}}
			>
				-
			</button>
			<button
				onClick={() => {
					setCount(0);
				}}
			>
				Reset
			</button>
		</div>
	);
}
