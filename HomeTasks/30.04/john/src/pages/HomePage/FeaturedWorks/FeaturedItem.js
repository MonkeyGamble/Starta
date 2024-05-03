import s from './FeaturedWorks.module.css';

export default function FeaturedItem(props) {
	const { title, year, tags, text, main_img } = props;

	const tags_string = tags.slice(0, 1);

	return (
		<div className={s.items_wrapper}>
			<img src={main_img} alt='pic1' />
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
