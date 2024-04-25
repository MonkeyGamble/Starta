import { NavLink } from 'react-router-dom';

export default function Header() {
	return (
		<header>
			<div className='logo'></div>
			<ul className='menu_wrapper'>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/products'>Products</NavLink>
				</li>
				<li>
					<NavLink to='/about'>About</NavLink>
				</li>
				<li>
					<NavLink to='/contacts'>Contacts</NavLink>
				</li>
			</ul>
		</header>
	);
}
