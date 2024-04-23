import { useState, useEffect } from 'react';

export default function App() {
	const [variable, setVariable] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(json => setVariable(json));
	}, []);

	return (
		<div>
			<ul>
				{variable &&
					variable.map(elem => {
						return (
							<div key={elem.id}>
								<h2>Title: {elem.title}</h2>
								<h4>Body: {elem.body}</h4>
							</div>
						);
					})}
			</ul>
		</div>
	);
}
