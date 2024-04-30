import React from 'react';
import { useState, useEffect } from 'react';
import AnotherPage from './pages/AnotherPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function App() {
	const [check, setCheck] = useState(false);

	const onnOff = () => {
		setCheck(!check);
	};

	const click = () => {
		console.log('Was clicked!');
	};

	useEffect(() => {
		document.addEventListener('mousedown', click);
		return () => {
			document.removeEventListener('mousedown', click);
		};
	}, []);

	return (
		<Router>
			<div>
				{/* <button onClick={onnOff}>Button</button>
				{check && <p>INFO</p>} */}
				<button>
					<Link to='/another'>Go Away</Link>
				</button>
				<Routes>
					<Route path='/another' element={<AnotherPage />}></Route>
				</Routes>
			</div>
		</Router>
	);
}
