import { useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';
import { Context } from '../Contexts/context';

export default function Header() {
	const { incrementCount } = useContext(Context);
	const { theme, changeTheme } = useContext(ThemeContext);

	return (
		<div className={`header ${theme}`}>
			<button onClick={changeTheme}>Change Theme</button>
			<button onClick={incrementCount}>Click!</button>
		</div>
	);
}
