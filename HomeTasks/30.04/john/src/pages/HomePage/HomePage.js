import s from './HomePage.module.css';

export default function HomePage() {
	return (
		<div className={s.homepage_wrapper}>
			<div className={`${s.intro} ${s.content_line}`}>
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
				<div className={`${s.content_line} ${s.posts}`}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'flex-end',
							marginBottom: '20px',
						}}
					>
						<h3>Recent posts</h3>
						<a href='/works'>View all</a>
					</div>

					<div className={s.recent_boxes}>
						<div className={s.box}>
							<h2>Making a design system from scratch</h2>
							<div className={s.box_content}>
								<p>12 Feb 2020</p>
								<p>|</p>
								<p>Design, Pattern</p>
							</div>
							<p>
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do
								amet sint. Velit officia consequat duis enim velit mollit.
								Exercitation veniam consequat sunt nostrud amet.
							</p>
						</div>
						<div className={s.box}>
							<h2>Creating pixel perfect icons in Figma</h2>
							<div className={s.box_content}>
								<p>12 Feb 2020</p>
								<p>|</p>
								<p>Figma, Icon Design</p>
							</div>
							<p>
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do
								amet sint. Velit officia consequat duis enim velit mollit.
								Exercitation veniam consequat sunt nostrud amet.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className={`${s.featured_works} ${s.content_line}`}>
				<h3>Featured works</h3>

				<div className={s.featured_block}>
					<img src='../../assets/Rectangle 30.png' alt='pic1' />

					<div className={s.block_content}>
						<h2>Designing Dashboards</h2>

						<div style={{ display: 'flex', gap: '26px', alignItems: 'center' }}>
							<div className={s.year}>2020</div>

							<h4>Dashboard</h4>
						</div>

						<p>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint. Velit officia consequat duis enim velit mollit.
							Exercitation veniam consequat sunt nostrud amet.
						</p>
					</div>
				</div>

				<div className={s.featured_block}>
					<img src='../../assets/Rectangle 32.png' alt='pic2' />

					<div className={s.block_content}>
						<h2>Vibrant Portraits of 2020</h2>

						<div style={{ display: 'flex', gap: '26px', alignItems: 'center' }}>
							<div className={s.year}>2018</div>

							<h4>Illustration</h4>
						</div>

						<p>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint. Velit officia consequat duis enim velit mollit.
							Exercitation veniam consequat sunt nostrud amet.
						</p>
					</div>
				</div>
				<div className={s.featured_block}>
					<img src='../../assets/Rectangle 34.png' alt='pic3' />

					<div className={s.block_content}>
						<h2>36 Days of Malayalam type</h2>

						<div style={{ display: 'flex', gap: '26px', alignItems: 'center' }}>
							<div className={s.year}>2018</div>

							<h4>Typography</h4>
						</div>

						<p>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint. Velit officia consequat duis enim velit mollit.
							Exercitation veniam consequat sunt nostrud amet.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
