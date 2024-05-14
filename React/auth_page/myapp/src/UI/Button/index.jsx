import s from './Button.module.css';

export default function Button(props) {
	const { text, color, ...otherProps } = props;

	console.log(props);
	console.log(otherProps);

	return (
		<button {...otherProps} className={`${s.button_elem} ${s[color]}`}>
			{text}
		</button>
	);
}
