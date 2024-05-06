import s from './BlogPage.module.css';
import { blog_data } from '../../data';
import BlogItem from './BlogItem';

export default function BlogPage() {
	return (
		<div className={`${s.blog_wrapper} ${s.content_line}`}>
			<h1>Blog</h1>
			<div className={s.blogs}>
				{blog_data.map(elem => (
					<BlogItem key={elem.id} {...elem} />
				))}
			</div>
		</div>
	);
}
