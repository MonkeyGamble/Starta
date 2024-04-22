import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import { Context } from './Contexts/context';
import { ThemeContext } from './Contexts/ThemeContext';

export default function App() {
	let [count, setCount] = useState(0);
	let [theme, setTheme] = useState('light');

	function incrementCount() {
		setCount(count + 1);
	}

	function changeTheme() {
		let newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
	}

	return (
		<ThemeContext.Provider value={(theme, changeTheme)}>
			<Context.Provider value={{ count, incrementCount }}>
				<div className={theme}>
					<Header incrementCount={incrementCount} />
					<Content />
				</div>
			</Context.Provider>
		</ThemeContext.Provider>
	);
}


//В приложении ТуДуАпп создать ТуДуКонтекст и передать туда фукнции changeTodo, deleteTodo