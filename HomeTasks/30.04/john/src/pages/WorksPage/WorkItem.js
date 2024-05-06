import s from './WorksPage.module.css';

export default function WorkItem(props) {
	const { title, tags, main_img, year, text } = props;
	const tags_string = tags.join(', ');
	return (
		<div className={s.items_wrapper}>
			<img src={main_img} alt='pic' />

			<div className={s.block_content}>
				<h2>{title}</h2>

				<div className={s.year_tags}>
					<div className={s.year}>{year}</div>
					<h4>{tags_string}</h4>
				</div>

				<p>{text}</p>
			</div>
		</div>
	);
}
