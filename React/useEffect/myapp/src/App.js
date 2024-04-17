import Example from './components/Example';
import { useState, useEffect } from 'react';
import Users from './components/Users';

export default function App() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let savedCount = localStorage.getItem('count');
		setCount(+savedCount);
		console.log(savedCount);
	}, []);

	useEffect(() => {
		localStorage.setItem('count', count);
	}, [count]);

	return (
		<div>
			<h2>Count компонента App: {count}</h2>
			<button onClick={() => setCount(count + 1)}>Increment Count App</button>
			<button onClick={() => setCount(count - 1)}>Decrement Count App</button>
			{count < 5 && <Example />}
			<Users />
		</div>
	);
}
