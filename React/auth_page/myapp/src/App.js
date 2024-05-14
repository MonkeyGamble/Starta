import { useState } from 'react';
import Button from './UI/Button';
import { Link } from 'react-router-dom';
import Modal from './components/Modal';

export default function App() {
	const [active, setActive] = useState(false);

	return (
		<div>
			<Link to={'/login'}>
				<Button
					text={'Авторизация / Регистрация'}
					color={'yellow'}
					onClick={() => {
						setActive(true);
					}}
				/>
			</Link>
			<Modal active={active} setActive={setActive} />
		</div>
	);
}
