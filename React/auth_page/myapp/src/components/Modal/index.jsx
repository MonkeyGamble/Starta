import s from './Modal.module.css';
import { Routes, Route } from 'react-router-dom';
import FormElem from '../FormElem';

export default function Modal({ active, setActive }) {
	return (
		<div className={`${s.modal} ${active && s.active}`}>
			<div className={`${s.modal_content} ${active && s.active}`}>
				<button
					onClick={() => {
						setActive(false);
					}}
				>
					X
				</button>
				<Routes>
					<Route
						path='/login'
						element={
							<FormElem
								type='login'
								title='Авторизация'
								link='/registration'
								buttons={{
									submit: 'Авторизоваться',
									redirect: 'Регистрация',
								}}
								input={{
									email: 'Почта',
									password: 'Пароль',
								}}
								infoText='Введите логин и пароль вашего аккаунта'
							/>
						}
					/>
					<Route
						path='/registration'
						element={
							<FormElem
								type='reg'
								title='Регистрация'
								link='/login'
								buttons={{
									submit: 'Зарегистрироваться',
									redirect: 'Авторизация',
								}}
								input={{
									email: 'Почта',
									password: 'Пароль',
									repeatPassword: 'Повторить пароль',
								}}
								infoText={
									'Регистрируясь на сайте, вы соглашетесь с нашими правилами и политикой конфиденциальности'
								}
							/>
						}
					/>
					<Route
						path='/reset'
						element={
							<FormElem
								type='reset'
								title='Вспомнить пароль'
								link='/login'
								buttons={{
									submit: 'Сбросить пароль',
									redirect: 'Авторизация',
								}}
								input={{
									email: 'Почта',
								}}
								infoText={
									'Укажите почту зарегистрированного аккаунта. Ссылка на сброс пароля придет на указанную почту и будет доступна 24 часа'
								}
							/>
						}
					/>
				</Routes>
			</div>
		</div>
	);
}
