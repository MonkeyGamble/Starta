import s from './WorksDetailPage.css';
import { work_data } from '../../../data';
import { useParams } from 'react-router-dom';

export default function DesigningDashboardsPage() {
	const { id } = useParams(0);

	return (
		<div className={`${s.design_wrapper} ${s.content_line}`}>
			<h1>{work_data[id - 1].title}</h1>
			<div className={s.year_wrapper}>
				<div className={s.year}>{work_data[id - 1].year}</div>
				<p>{work_data[id - 1].year}</p>
			</div>
			<p>
				Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
				sint. Velit officia consequat duis enim velit mollit. Exercitation
				veniam consequat sunt nostrud amet.
			</p>
			<img
				className={s.pic1}
				src='../../../assets/Rectangle 4.png'
				alt='pic1'
			/>
			<h2>Heading 1</h2>
			<h3>Heading 2</h3>
			<p>
				Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
				sint. Velit officia consequat duis enim velit mollit. Exercitation
				veniam consequat sunt nostrud amet.
			</p>
			<img
				className={s.pic2}
				src='../../../assets/Rectangle 5.png'
				alt='pic2'
			/>
			<img
				className={s.pic3}
				src='../../../assets/Rectangle 6.png'
				alt='pic3'
			/>
		</div>
	);
}
