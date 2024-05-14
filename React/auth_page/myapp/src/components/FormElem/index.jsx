import Button from '../../UI/Button';
import Input from '../../UI/Input';
import s from './FormElem.module.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

//реализовать валидацию формы по правилу: почта по маске, пароль (минимум 8 символов и 1 заглавная бука), повторить пароль (сравнить с паролем).
//вывести текст с ошибкой под инпутом
//переписать роутинг

export default function FormElem(props) {
	const { title, link, buttons, input, type, infoText } = props;

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm();

	const onSubmit = data => {
		console.log(data);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h2>{title}</h2>

				<p>{input.email}</p>
				<Input {...register('email')} />

				{type !== 'reset' && (
					<>
						<p>{input.password}</p>
						<Input {...register('password')} />
					</>
				)}

				{type === 'reg' && (
					<>
						<p>{input.repeatPassword}</p>
						<Input {...register('repeatPasswod')} />
					</>
				)}

				<p className={s.info_text}>{infoText}</p>

				{type === 'login' && (
					<Link to={'/reset'}>
						<p className={s.info_text}>Восстановить доступ</p>
					</Link>
				)}

				<Button text={buttons.submit} color={'yellow'} />
				<Link to={link}>
					<Button text={buttons.redirect} color={'white'} />
				</Link>
			</form>
		</div>
	);
}
