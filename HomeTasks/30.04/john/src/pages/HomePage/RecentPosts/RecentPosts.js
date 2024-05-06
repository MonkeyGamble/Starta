import s from './RecentPosts.module.css';
import { blog_data } from '../../../data';
import PostItem from './PostItem';
import { Link } from 'react-router-dom';

export default function RecentPosts() {
	const blogData = blog_data.slice(0, 2);

	return (
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

					<Link to='/blog'>View all</Link>
				</div>

				<div className={s.recent_boxes}>
					{blogData.map(elem => (
						<PostItem key={elem.id} {...elem} />
					))}
				</div>
			</div>
		</div>
	);
}
