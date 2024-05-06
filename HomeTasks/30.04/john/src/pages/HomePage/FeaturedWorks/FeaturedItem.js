import s from './FeaturedWorks.module.css';
import { Link } from 'react-router-dom';

export default function FeaturedItem(props) {
	const { id, title, year, tags, text, main_img } = props;

	return (
		<div className={s.items_wrapper}>
			<img src={main_img} alt='pic1' />
			<div className={s.block_content}>
				<Link to={`/works/${id}`}>
					<h2>{title}</h2>
				</Link>
				<div style={{ display: 'flex', gap: '26px', alignItems: 'center' }}>
					<div className={s.year}>{year}</div>
					<h4>{tags[0]}</h4>
				</div>
				<p>{text}</p>
			</div>
		</div>
	);
}
