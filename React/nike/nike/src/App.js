import React from 'react';

export default function App() {
	return (
		<div className='wrapper'>
			<header>
				<div className='header_left'>
					<svg />
					<div className='header_info'>
						<h3>React Sneakers</h3>
						<p>Магазин лучших кроссовок</p>
					</div>
				</div>

				<ul className='header_right'>
					<li>
						<svg />
						<span>1205 грн.</span>
					</li>
					<li>
						<svg />
					</li>
				</ul>
			</header>
			<div className='content'>
				<h1>Все кроссовки</h1>
				....
			</div>
		</div>
	);
}
