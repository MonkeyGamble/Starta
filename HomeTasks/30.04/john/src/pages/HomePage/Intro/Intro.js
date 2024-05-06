import s from './Intro.module.css';
import selfie from '../../../assets/photo_1.png';

export default function Intro() {
	return (
		<div className={`${s.intro} ${s.content_line}`}>
			<div className={s.intro_image}>
				<img src={selfie} alt='selfie' className={s.selfie} />
				<div className={s.circle}></div>
			</div>

			<div className={s.text_content}>
				<h1>Hi, I am John, Creative Technologist</h1>
				<p>
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
					sint. Velit officia consequat duis enim velit mollit. Exercitation
					veniam consequat sunt nostrud amet.
				</p>
				<button>Download Resume</button>
			</div>
		</div>
	);
}
