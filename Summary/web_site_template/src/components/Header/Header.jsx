import React from 'react';
import s from './Header.module.css';

export default function Header() {
	return (
		<header className={s.header}>
			<div className='wrapper_1'>
				<p>ROBO.SCHOOL</p>
				<nav>
					<ul>
						<li>О школе</li>
						<li>Тренеры</li>
						<li>Стоимость</li>
					</ul>
				</nav>
				<p>+7 800 000 11 22</p>
			</div>
		</header>
	);
}
