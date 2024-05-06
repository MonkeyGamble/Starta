import s from './FeaturedWorks.module.css';
import { work_data } from '../../../data';
import FeaturedItem from './FeaturedItem';

export default function FeaturedWorks() {
	const screen_width = window.innerWidth;

	const workData =
		screen_width > 375 ? work_data.slice(0, 3) : work_data.slice(0, 1);

	return (
		<div className={`${s.featured_works} ${s.content_line}`}>
			<h3>Featured works</h3>

			<div className={s.featured_block}>
				{workData.map(elem => (
					<FeaturedItem key={elem.id} {...elem} />
				))}
			</div>
		</div>
	);
}
