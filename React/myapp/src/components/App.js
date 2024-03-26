import React from 'react';
import Post from './Post';

export default function App() {
	let number = 10;
	let classValue = 'test';

	let styleObj = {
		color: 'red',
		fontSize: '25px',
		color: 'red',
		textAlign: 'center',
	};

	return (
		<div>
			<div>
				<h1>{Math.random() * 100}</h1>
				<p>{5 + 5}</p>
				{/* <p>{text}</p> */}

				<p>{number > 5 ? 'Число больше 5' : 'Число меньше или равно 5'}</p>
			</div>
			<div>
				{/* Style, class */}
				<div className={classValue + ' dom'}>
					<h2 style={styleObj}>Style value</h2>
				</div>
			</div>
			{/* {Пример передачи props (свойств, аргументов) в дочерний компонент} */}
			<div>
				<Post
					title='Title 1'
					text='Some text for Post 1'
					color='red'
					author='Alex'
				/>
				<Post
					title='Title 2'
					text='Some text for Post 2'
					color='blue'
					author='Neena'
				/>
				<Post
					title='Title 3'
					text='Some text for Post 3'
					color='green'
					author='Steven'
				/>
			</div>
			{/* {Добавьте в компонент Post новый проп author, который будет содержать
			имена атворов постов: // Alex, Neena, Steven // Эти имена укажите как
			значение текстового свойства для нового параграфа как последний дочерний
			элемент div} */}
			<div>
				<p>
					<Post author='Alex' />
					<Post author='Neena' />
					<Post author='Steven' />
				</p>
			</div>
		</div>
	);
}
