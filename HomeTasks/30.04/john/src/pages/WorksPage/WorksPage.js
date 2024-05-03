import s from './WorksPage.module.css';
import { work_data } from '../../data';
import WorkItem from './WorkItem';
import { Link } from 'react-router-dom';

export default function WorksPage() {
	return (
		<div className={`${s.works_wrapper} ${s.content_line}`}>
			<h1>Work</h1>

			<div className={s.featured_block}>
				{work_data.map(elem => (
					<Link
						to={`/works/${elem.id}`}
						style={{ textDecoration: 'none', color: 'inherit' }}
					>
						<WorkItem key={elem.id} {...elem} />
					</Link>
				))}
			</div>
		</div>
	);
}
