import bike from '../../assets/image 1.png';

export default function Offer() {
	return (
		<div className='offer'>
			<img src={bike} alt='bike' />
			<div className='content_line'>
				<h2>Что мы предлагаем</h2>
				<p>
					В нашей мастерской можно выполнить комплексное техническое
					обслуживание велосипеда, ремонт и настройку всех его узлов,
					шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает
					избежать многих проблем и дорогого ремонта. Все работы выполняем
					качественно и с душой.
				</p>
			</div>
		</div>
	);
}
