import React, { forwardRef } from 'react';
import s from './Button.module.css';

const Button = forwardRef((props, ref) => {
	const { text, color, ...otherProps } = props;

	return (
		<button
			ref={ref}
			{...otherProps}
			className={`${s.button_elem} ${s[color]}`}
		>
			{text}
		</button>
	);
});

export default Button;
