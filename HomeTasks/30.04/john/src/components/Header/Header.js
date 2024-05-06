import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';

export default function Header() {
	const [burgerActive, setBurgerActive] = useState(false);

	const burgerMenuHandle = () => {
		setBurgerActive(!burgerActive);
		console.log(burgerActive);
	};

	return (
		<div>
			<header className={s.content_line}>
				<RxHamburgerMenu
					className={`${s.burger} ${burgerActive ? s.active : ''}`}
					onClick={burgerMenuHandle}
				/>
				<nav>
					<ul className={`${s.menu_wrapper} ${burgerActive ? s.active : ''}`}>
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
