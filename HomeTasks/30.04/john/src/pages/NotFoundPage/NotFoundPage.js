import { useLocation, useNavigate } from 'react-router-dom';
import s from './NotFoundPage.module.css';

export default function NotFoundPage() {
	const navigate = useNavigate();

	setTimeout(() => {
		navigate('/');
	}, 5000);

	const location = useLocation();
	console.log(location);

	return (
		<div className={`${s.content_line} ${s.content}`}>
			<h2>404 Page not found</h2>

			<img
				width={200}
				height={300}
				src='https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470175715831-NUJOMI6VW13ZNT1MI0VB/image-asset.jpeg?format=750w'
				alt='cry, baby, cry'
			/>
			<div className={s.buttons}>
				<button onClick={() => navigate(-1)}>Go Back</button>
				<button onClick={() => navigate('/')}>Go Home</button>
			</div>
		</div>
	);
}
