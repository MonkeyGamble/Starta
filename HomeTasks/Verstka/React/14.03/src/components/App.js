import React from 'react';
import NavigationMenu from './HeaderSection/NavigationMenu';
import HeaderContent from './HeaderSection/HeaderContent.jsx';
import Offer from './MainSection/Offer.jsx';

export default function App() {
	return (
		<div>
			<div className='header'>
				<NavigationMenu />
				<HeaderContent />
			</div>
			<div className='main_section'>
				<Offer />
			</div>
		</div>
	);
}
