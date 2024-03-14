import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function App() {
	return (
		<div>
			<Post />
			<Post />
			<Post />
			<Post />
		</div>
	);
}

function Post() {
	return (
		<div>
			<h1>Head InfoText</h1>
			<p>Message InfoText</p>
		</div>
	);
}
