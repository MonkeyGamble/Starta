import React from 'react';
import s from './Footer.module.css';

export default function Footer() {
	return (
		<footer className={s.footer}>
			<div className='wrapper_1'>
				<div>
					<p>ROBO.SCHOOL</p>
					<p>© ROBO.SCHOOL</p>
				</div>
				<p>+7 800 000 11 22</p>
			</div>
		</footer>
	);
}

// [s.footer, 'wrapper_1'].join(' ') - два и более классов у одно элемента
