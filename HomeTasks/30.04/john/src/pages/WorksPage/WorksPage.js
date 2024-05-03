import { Link } from 'react-router-dom';
import s from './WorksPage.module.css';

export default function WorksPage() {
	return (
		<div className={`${s.works_wrapper} ${s.content_line}`}>
			<h1>Work</h1>
			<div className={s.featured_block}>
				<img src='../../assets/Rectangle 30.png' alt='pic1' />

				<div className={s.block_content}>
					<h2>
						<Link style={{ color: 'black' }} to='/works/design'>
							Designing Dashboards
						</Link>
					</h2>

					<div style={{ display: 'flex', gap: '26px', alignItems: 'center' }}>
						<div className={s.year}>2020</div>

						<h4>Dashboard</h4>
					</div>

					<p>
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
						sint. Velit officia consequat duis enim velit mollit. Exercitation
						veniam consequat sunt nostrud amet.
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
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
						sint. Velit officia consequat duis enim velit mollit. Exercitation
						veniam consequat sunt nostrud amet.
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
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
						sint. Velit officia consequat duis enim velit mollit. Exercitation
						veniam consequat sunt nostrud amet.
					</p>
				</div>
			</div>

			<div className={s.featured_block}>
				<img src='../../assets/Rectangle 40.png' alt='pic4' />

				<div className={s.block_content}>
					<h2>Components</h2>

					<div style={{ display: 'flex', gap: '26px', alignItems: 'center' }}>
						<div className={s.year}>2018</div>

						<h4>Components, Design</h4>
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
