import './App.css';
import BackEnd from './BackEnd';

function App() {
	let list = ['red', 'yellow', 'green', 'black', 'blue'];

	return (
		<div>
			<ul>
				{list.map(item => (
					<li style={{ color: item }}>{item}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
