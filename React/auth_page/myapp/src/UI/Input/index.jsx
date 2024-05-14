import s from './Input.module.css';
import { forwardRef } from 'react';

//в реакте нельзя передать ref как проп в дочерний компонент
//forwardRef - оборачиваем, чтобы передать реф и отделить его от пропов

const Input = forwardRef((props, ref) => {
	return <input ref={ref} {...props} className={s.input_elem} />;
});

export default Input;
