import { useState } from 'react';

export default function Counter() {
	// let [state, setState] =  useState(default state)
	let [count, setCount] = useState(0);

	function increment() {
		setCount(count + 1);
	}
	function decrement() {
		setCount(count - 1);
	}

	// Реализуйте еще одну кнопку, которая по нажатиб будет // вызывать
	// модальное окно prompt и заменить значение состояния на цифру, которая
	// будет указана в модальном окне

	function promptHandle() {
		setCount(prompt('Enter new value:'));
	}
	return (
		<div>
			<h2>Counter</h2>
			<p>{count}</p>
			<div className='buttons'>
				<button onClick={decrement}>-</button>
				<button onClick={increment}>+</button>
				<button onClick={() => setCount(0)}>Reset</button>
				<button onClick={promptHandle}>Prompt</button>
			</div>
		</div>
	);
}
