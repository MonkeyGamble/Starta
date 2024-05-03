import s from './WorksPage.module.css';

export default function WorkItem(props) {
	const { id, title, tags, main_img, year, text } = props;
	const tags_string = tags.join(', ');
	return (
		<div className={s.items_wrapper}>
			<img src={main_img} alt='pic' />

			<div className={s.block_content}>
				<h2>{title}</h2>

				<div style={{ display: 'flex', gap: '26px', alignItems: 'center' }}>
					<div className={s.year}>{year}</div>
					<h4>{tags_string}</h4>
				</div>

				<p>{text}</p>
			</div>
		</div>
	);
}
