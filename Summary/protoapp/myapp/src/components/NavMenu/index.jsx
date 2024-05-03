import { NavLink } from 'react-router-dom';
import s from './index.module.css';

export default function NavMenu() {
	return (
		<header className={s.header}>
			<nav>
				<NavLink to='/'>Main</NavLink>
				<NavLink to='/products'>Products</NavLink>
			</nav>
		</header>
	);
}
