import s from './FeaturedWorks.module.css';
import pic1 from '../../../assets/Rectangle 30.png';
import pic2 from '../../../assets/Rectangle 32.png';
import pic3 from '../../../assets/Rectangle 34.png';

export default function FeaturedWorks() {
	return (
		<div className={`${s.featured_works} ${s.content_line}`}>
			<h3>Featured works</h3>

			<div className={s.featured_block}>
				<img src={pic1} alt='pic1' />

				<div className={s.block_content}>
					<h2>Designing Dashboards</h2>

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
				<img src={pic2} alt='pic2' />

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
				<img src={pic3} alt='pic3' />

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
		</div>
	);
}
