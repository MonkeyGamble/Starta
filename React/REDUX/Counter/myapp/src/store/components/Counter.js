import { useSelector, useDispatch } from 'react-redux';

export default function Counter() {
	const count = useSelector(store => store.count.count); //позволяет получить State из хранилища
	const dispatch = useDispatch(); //инициализирует диспетчера для отправки типа операции в редьюсер

	return (
		<div>
			<h1>Counter</h1>
			<h2>{count}</h2>
			<button onClick={() => dispatch({ type: 'INCR' })}>Increment</button>
			<button onClick={() => dispatch({ type: 'DECR' })}>Decrement</button>
			<button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
			<button onClick={() => dispatch({ type: 'INCR_BY_PAYLOAD', payload: 5 })}>
				Incr + 5
			</button>
			<button onClick={() => dispatch({ type: 'DECR_BY_PAYLOAD', payload: 7 })}>
				Incr -7
			</button>
			<button
				onClick={() => dispatch({ type: 'INCR_BY_PROMPT', payload: +prompt() })}
			>
				Incr by prompt
			</button>
			<button
				onClick={() => dispatch({ type: 'DECR_BY_PROMPT', payload: +prompt() })}
			>
				Decr by prompt
			</button>
		</div>
	);
}
