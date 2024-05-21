import { useSelector, useDispatch } from 'react-redux';
import {
	decrAction,
	decrByPayloadAction,
	decrByPromptAction,
	incrAction,
	incrByPayloadAction,
	incrByPromptAction,
	resetAction,
} from '../counterReducer';

export default function Counter() {
	const count = useSelector(store => store.count.count); //позволяет получить State из хранилища
	const dispatch = useDispatch(); //инициализирует диспетчера для отправки типа операции в редьюсер

	return (
		<div>
			<h1>Counter</h1>
			<h2>{count}</h2>
			<button onClick={() => dispatch(incrAction)}>Increment</button>
			<button onClick={() => dispatch(decrAction)}>Decrement</button>
			<button onClick={() => dispatch(resetAction)}>Reset</button>
			<button onClick={() => dispatch(incrByPayloadAction(5))}>Incr + 5</button>
			<button onClick={() => dispatch(decrByPayloadAction(7))}>Incr -7</button>
			<button onClick={() => dispatch(incrByPromptAction(+prompt()))}>
				Incr by prompt
			</button>
			<button onClick={() => dispatch(decrByPromptAction(+prompt()))}>
				Decr by prompt
			</button>
		</div>
	);
}
