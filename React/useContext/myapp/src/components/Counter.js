import { useContext } from 'react';
import { Context } from '../Contexts/context';
import { ThemeContext } from '../Contexts/ThemeContext';

export default function Counter() {
	const { count } = useContext(Context);
	const { theme } = useContext(ThemeContext);

	return (
		<div className={`counter ${theme}`}>
			<h1>Counter</h1>
			<p>count: {count}</p>
		</div>
	);
}
