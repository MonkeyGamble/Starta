import dino from '../../assets/dino.png';

export default function MainContent() {
	return (
		<div className='main_content'>
			<div className='main_text content_line'>
				.<h1>Веломастерская “Велозар”</h1>
				<div>
					<p>
						Мы, мастера веломастерской «Велозар», как раз те самые счастливые
						люди, которые смогли превратить свое увлечение и хобби в профессию.
						Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил
						Вам только радость и удовольствие от езды.
					</p>
					<img src={dino} alt='dino' />
				</div>
			</div>
		</div>
	);
}
