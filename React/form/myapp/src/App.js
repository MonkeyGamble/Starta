import './App.css';
import { useForm } from 'react-hook-form';

export default function App() {
	let {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		watch,
	} = useForm({
		mode: 'onSubmit',
	});

	const onSubmit = data => {
		console.log(data);
		// reset({ first_name: '123', last_name: '' });
		reset();
	};

	const first_name_input = register('first_name', {
		required: 'Поле с именем обязательно к заполнению',
		minLength: {
			value: 5,
			message: 'Имя не может быть короче 5 символов',
		},
		maxLength: {
			value: 10,
			message: 'Имя не может состоять из более чем 10 символов',
		},
	});

	const last_name_input = register('last_name', {
		required: 'Поле с фамилией обязательно к заполнению',
		minLength: {
			value: 3,
			message: 'Фамилия не может быть короче 3 символов',
		},
	});

	const email_input = register('email', {
		required: 'Почта обязательна к заполнению',
		pattern: {
			value: /^\w+[@]\w+[.]\w{2,6}$/,
			// ^\w+: Начало строки с одного или более словесных символов (буквы, цифры, подчеркивание).
			// [@]: Символ "@".
			// \w+: Один или более словесных символов.
			// [.]: Символ точки.
			// \w{2,6}: Два или более словесных символов, составляющих домен верхнего уровня, который должен содержать от 2 до 6 символов.
			message: 'Почта заполнена неверно',
		},
	});

	const password_input = register('password', {
		required: 'Пароль обязателен к заполнению',
		pattern: {
			value: /^(?=.*\d).{8,}$/,
			// ^: Начало строки.
			// (?=.*\d): Утверждение вперед (lookahead), которое проверяет, что строка содержит хотя бы одну цифру (\d означает любую цифру, а .* означает ноль или более любых символов).
			// .{8,}: Строка должна содержать как минимум 8 символов (. означает любой символ, а {8,} означает как минимум 8 символов).
			// $: Конец строки.
			message: 'Пароль должен быть не менее 8 символов и хотя бы одной цифры',
		},
	});

	const repeat_password_input = register('repeat_password', {
		required: 'Пароль обязателен к заполнению',
		validate: value => value === watch('password') || 'Пароли не совпадают',
	});

	return (
		<div className='form_wrapper'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label>
						First Name
						<input
							{...first_name_input}
							className={errors.first_name && 'error'}
						/>
					</label>
					{errors.first_name && <p>{errors.first_name.message}</p>}
				</div>
				<div>
					<label>
						Last Name
						<input
							{...last_name_input}
							className={errors.last_name && 'error'}
						/>
					</label>
					{errors.last_name && <p>{errors.last_name.message}</p>}
				</div>
				<div>
					<label>
						Email
						<input {...email_input} className={errors.email && 'error'} />
					</label>
					{errors.email && <p>{errors.email.message}</p>}
				</div>
				<div>
					<label>
						Password
						<input
							type='password'
							{...password_input}
							className={errors.password && 'error'}
						/>
					</label>
					{errors.password && <p>{errors.password.message}</p>}
				</div>
				<div>
					<label>
						Repeat Password
						<input
							type='password'
							{...repeat_password_input}
							className={errors.repeat_password && 'error'}
						/>
					</label>
					{errors.repeat_password && <p>{errors.repeat_password.message}</p>}
				</div>
				<div>
					<input type='submit' />
				</div>
			</form>
		</div>
	);
}
