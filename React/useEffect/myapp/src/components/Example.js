import { useEffect, useState } from 'react';

export default function Example() {
	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);

	//режимы работы useEffect

	// 1. Только монтирование компонента

	// useEffect(() => {
	// 	console.log('Монтирование компонента');
	// }, []);

	// 2. Монтирование и обновление компонента

	// useEffect(() => {
	// 	console.log('Монтирование компонента или обновление');
	// });

	// 3. Монтирование и обновление указанного состояния
	// useEffect(() => {
	// 	console.log('Монтирование и обновление count1');
	// }, [count1]);

	// useEffect(() => {
	// 	console.log('Монтирование и обновление count2');
	// }, [count2]);

	// 4. Только размонтирование (работает также с монтированием, если дописать код до return)
	// useEffect(() => {
	// 	console.log('Монтирование компонента');
	// 	return () => {
	// 		console.log('Компонент размонтирован END');
	// 	};
	// }, []);

	//Этот лог будет выполнен во время инициализации компонента
	// console.log('Инициализация компонента');

	return (
		<div>
			<h2>{count1}</h2>
			<button onClick={() => setCount1(count1 + 1)}>Click!</button>
			<h2>{count2}</h2>
			<button onClick={() => setCount2(count2 + 1)}>Click!</button>
		</div>
	);
}
