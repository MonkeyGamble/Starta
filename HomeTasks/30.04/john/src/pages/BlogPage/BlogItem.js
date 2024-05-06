import s from './BlogPage.module.css';

export default function BlogItem(props) {
	const { title, text, tags, date } = props;

	const tagsString = tags.join(', ');

	return (
		<div>
			<div className={s.blog_section}>
				<h2>{title}</h2>
				<div className={s.blog_content}>
					<p>{date}</p>
					<p>|</p>
					<p>{tagsString}</p>
				</div>
				<p className={s.text}>{text}</p>
			</div>
		</div>
	);
}
