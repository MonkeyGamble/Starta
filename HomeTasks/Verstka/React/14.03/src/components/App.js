import React from 'react';
import NavigationMenu from './HeaderSection/NavigationMenu';
import MainContent from './MainSection/MainContent.jsx';
import Offer from './MainSection/Offer.jsx';
import Slogan from './MainSection/Slogan.jsx';
import Grid from './MainSection/Grid.jsx';
import Footer from './Footer/Footer.jsx';

export default function App() {
	let grid_boxes = [
		{ color: '#22356F', text: 'Годовое ТО' },
		{ color: '#0052C1', text: 'Выравнивание колес' },
		{ color: '#76B58B', text: 'Настройка переключателей' },
	];

	return (
		<div className='web_page'>
			<header>
				<NavigationMenu />
			</header>
			<main className='main_section'>
				<MainContent />
				<Offer />
				<Slogan />
				<div className='grid_cards'>
					{grid_boxes.map((elem, index) => (
						<Grid key={index} color={elem.color} text={elem.text} />
					))}
				</div>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}
