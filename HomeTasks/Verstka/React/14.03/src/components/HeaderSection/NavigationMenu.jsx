import dinoLogo from '../../assets/logo_velozar.png';

export default function navigationMenu() {
	return (
		<div className='nav_menu content_line'>
			<img src={dinoLogo} alt='logo' />
			<ul className='nav_list'>
				<li>О нас</li>
				<li>Услуги</li>
				<li>Аренда</li>
			</ul>
			<button className='nav_menu_button'>Связаться</button>
		</div>
	);
}
