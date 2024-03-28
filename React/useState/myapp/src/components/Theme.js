import React from 'react';
import { useState } from 'react';

// Создать компонент Theme, сформировав DIV а внутри заголовок 2 уровня с значением 'Theme'
// внутри компонента создайте состояние theme, в качестве дефолтного значения укажите строку 'default value'
// Эту строку выведите в параграфе под заголовком второго уровня

export default function Theme() {
	let [string, setString] = useState('default value');
	let [theme, setTheme] = useState('light');

	function toUpperCase() {
		setString(string.toUpperCase());
	}
	function toLowerCase() {
		setString(string.toLocaleLowerCase());
	}

	function changeCase() {
		setString(string => {
			return string.toUpperCase() === string
				? string.toLowerCase()
				: string.toUpperCase();
		});
	}

	function initCap() {
		setString(string[0].toUpperCase() + string.slice(1).toLowerCase());
	}

	function promptHandle() {
		setString(prompt('Enter new value:'));
	}

	function changeTheme() {
		setTheme(theme => {
			return theme === 'light' ? 'dark' : 'light';
		});
	}

	return (
		<div className={theme}>
			<h2>Theme</h2>
			<p>{string}</p>
			<button onClick={toUpperCase}>To Upper Case</button>
			<button onClick={toLowerCase}>to Lower Case</button>
			<button onClick={changeCase}>Change Case</button>
			<button onClick={initCap}>Init Cap</button>
			<button onClick={promptHandle}>Set Value</button>
			<h2>Theme settings</h2>
			<input type='checkbox' onChange={changeTheme} />
			Change Theme
		</div>
	);
}
