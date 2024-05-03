import s from './FeaturedWorks.module.css';
import { work_data } from '../../../data';
import FeaturedItem from './FeaturedItem';

export default function FeaturedWorks() {
	const workData = work_data.slice(0, 3);

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
