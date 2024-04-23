import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header>
			<div className='logo'></div>
			<ul className='menu_wrapper'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/products'>Products</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/contacts'>Contacts</Link>
				</li>
			</ul>
		</header>
	);
}
