import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

export default function Header() {
	return (
		<div>
			<header className={s.content_line}>
				<nav>
					<ul className={s.menu_wrapper}>
						<li>
							<NavLink className={s.navlink} to='/'>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink className={s.navlink} to='/works'>
								Works
							</NavLink>
						</li>
						<li>
							<NavLink className={s.navlink} to='/blog'>
								Blog
							</NavLink>
						</li>
						<li>
							<NavLink className={s.navlink} to='/contact'>
								Contact
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}
