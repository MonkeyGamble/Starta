import Button from '../../UI/Button';
import Input from '../../UI/Input';
import s from './FormElem.module.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';

//переписать роутинг v6

export default function FormElem(props) {
	const { title, link, buttons, input, type, infoText } = props;

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm();

	const ButtonRef = useRef();

	const [timer, setTimer] = useState(0);
	const [startTimer, setStartTimer] = useState(false);
	const [id, setId] = useState(null);

	const decrementTime = () => {
		if (timer < 0) {
			setTimer(() => 50);
		} else {
			setTimer(prevState => prevState - 1);
		}
	};

	useEffect(() => {
		if (startTimer) {
			setId((id = setInterval(decrementTime, 1000)));
			return clearInterval(id);
		} else {
			clearInterval(id);
		}
	}, [startTimer]);

	const onSubmit = data => {
		if (type === 'reset') {
			ButtonRef.current.disabled = true;
			setStartTimer(true);
			setTimeout(() => {
				ButtonRef.current.disabled = false;
				setStartTimer(false);
			}, 51 * 1000);
		}
		console.log(data);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h2>{title}</h2>

				<p>{input.email}</p>
				<Input
					{...register('email', {
						required: 'Почта должна быть заполнена',
						pattern: {
							message: 'Указана неверная почта',
							value:
								/^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,6}$/,
						},
					})}
				/>

				{errors.email && (
					<p className={s.warning_text}>{errors.email.message}</p>
				)}

				{type !== 'reset' && (
					<>
						<p>{input.password}</p>
						<Input
							{...register('password', {
								required: 'Пароль должен быть заполнен',
								pattern: {
									message:
										'Пароль должен содержать минимум 8 символов и хотя бы 1 заглавную букву',
									value: /^(?=.*[A-Z]).{8,}$/,
								},
							})}
						/>
					</>
				)}

				{errors.password && (
					<p className={s.warning_text}>{errors.password.message}</p>
				)}

				{type === 'reg' && (
					<>
						<p>{input.repeatPassword}</p>
						<Input
							{...register('repeatPassword', {
								required: 'Поле должно быть заполнено',
								validate: value =>
									value === watch('password') || 'Пароли не совпадают',
							})}
						/>
						{errors.repeatPassword && (
							<p className={s.warning_text}>{errors.repeatPassword.message}</p>
						)}
					</>
				)}

				<p className={s.info_text}>{infoText}</p>

				{type === 'login' && (
					<Link to={'/reset'}>
						<p className={s.info_text}>Восстановить доступ</p>
					</Link>
				)}

				{startTimer && type === 'reset' && (
					<p>Подождите перед повторной отправкой {timer} секунд</p>
				)}
				<Button
					text={buttons.submit}
					color={'yellow'}
					disabled={true}
					ref={ButtonRef}
				/>

				<Link to={link}>
					<Button text={buttons.redirect} color={'white'} />
				</Link>
			</form>
		</div>
	);
}
