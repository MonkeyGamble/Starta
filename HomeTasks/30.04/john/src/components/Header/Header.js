import { NavLink } from 'react-router-dom';

export default function Header() {
	return (
		<div>
			<header>
				<nav>
					<ul className='menu_wrapper'>
						<li>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li>
							<NavLink to='/works'>Works</NavLink>
						</li>
						<li>
							<NavLink to='/blog'>Blog</NavLink>
						</li>
						<li>
							<NavLink to='/contact'>Contact</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}
