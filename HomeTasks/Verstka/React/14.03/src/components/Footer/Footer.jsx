import bike_2 from '../../assets/image 2.png';

export default function Footer() {
	return (
		<div className='footer web_page'>
			<img src={bike_2} alt='bike' />
			<div className='content_line'>
				<h2>Прокат велосипедов</h2>
				<p>
					У нас вы можете взять на прокат хорошо обслуженные и настроенные
					велосипеды. Как раз мы находимся в прекрасном парке!
				</p>
			</div>
		</div>
	);
}
