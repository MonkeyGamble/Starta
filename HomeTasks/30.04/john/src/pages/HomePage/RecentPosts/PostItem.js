import s from './RecentPosts.module.css';

export default function PostItem(props) {
	const { title, text, tags, date } = props;

	const tags_string = tags.join(', ');

	return (
		<div>
			<div className={s.box}>
				<h2>{title}</h2>
				<div className={s.box_content}>
					<p>{date}</p>
					<p>|</p>
					<p>{tags_string}</p>
				</div>
				<p>{text}</p>
			</div>
		</div>
	);
}
