import { work_data } from '../../../data';
import { useParams } from 'react-router-dom';
import s from './WorksDetailPage.module.css';

export default function DesigningDashboardsPage() {
	const { id } = useParams();

	const tagsString = work_data[id - 1].tags.join(', ');

	const content_h1 = work_data[id - 1].content.find(
		item => item[0] === 'h1'
	)[1];

	const content_images = work_data[id - 1].content.reduce((acc, item) => {
		item[0] === 'img' && acc.push(item[1]);
		return acc;
	}, []);

	const content_h2 = work_data[id - 1].content.find(
		item => item[0] === 'h2'
	)[1];

	const content_text = work_data[id - 1].content.find(
		item => item[0] === 'text'
	)[1];

	return (
		<div className={`${s.details_wrapper} ${s.content_line}`}>
			<h1>{work_data[id - 1].full_title}</h1>
			<div className={s.year_wrapper}>
				<div className={s.year}>{work_data[id - 1].year}</div>
				<p className={s.tags}>{tagsString}</p>
			</div>
			<p>{work_data[id - 1].text}</p>
			<img className={s.pic} src={work_data[id - 1].main_img} alt='pic' />
			<h2>{content_h1}</h2>
			<h3>{content_h2}</h3>
			<p>{content_text}</p>
			{content_images.map((img, index) => (
				<img key={index} className={s.pic} src={img} alt='pic' />
			))}
		</div>
	);
}
