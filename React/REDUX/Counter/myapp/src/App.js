import { useSelector, useDispatch } from 'react-redux';

export default function App() {
	const count = useSelector(store => store.count); //позволяет получить State из хранилища
	const dispatch = useDispatch(); //инициализирует диспетчера для отправки типа операции в редьюсер

	return (
		<div>
			<h1>Counter</h1>
			<h2>{count}</h2>
			<button onClick={() => dispatch({ type: 'INCR' })}>Increment</button>
			<button onClick={() => dispatch({ type: 'DECR' })}>Decrement</button>
			<button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
		</div>
	);
}
