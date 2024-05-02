import s from './HomePage.module.css';

export default function HomePage() {
	return (
		<div className={`${s.homepage_wrapper} ${s.content_line}`}>
			<div className={s.intro}>
				<div className={s.text_content}>
					<h1>Hi, I am John, Creative Technologist</h1>
					<p>
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
						sint. Velit officia consequat duis enim velit mollit. Exercitation
						veniam consequat sunt nostrud amet.
					</p>
					<button>Download Resume</button>
				</div>
				<img src='../../assets/photo_1.png' alt='selfie' />
			</div>
			<div className={s.recent_posts}>
				<h3>Recent posts</h3>
				<a href='#'>View all</a>
				<div className={s.recent_left}>
					<h2>Making a design system from scratch</h2>
					<div className={s.left_content}>
						<p>12 Feb 2020</p>
						<p>|</p>
						<p>Design, Pattern</p>
					</div>
					<p>
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
						sint. Velit officia consequat duis enim velit mollit. Exercitation
						veniam consequat sunt nostrud amet.
					</p>
				</div>
				<div className={s.recent_right}>
					<h2>Creating pixel perfect icons in Figma</h2>
					<div className={s.right_content}>
						<p>12 Feb 2020</p>
						<p>|</p>
						<p>Figma, Icon Design</p>
					</div>
					<p>
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
						sint. Velit officia consequat duis enim velit mollit. Exercitation
						veniam consequat sunt nostrud amet.
					</p>
				</div>
			</div>
		</div>
	);
}
