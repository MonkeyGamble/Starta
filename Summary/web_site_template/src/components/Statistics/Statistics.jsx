import React from 'react';
import s from './Statistics.module.css';
import StatisticsContainer from '../StatisticsContainer/StatisticsContainer';

export default function Statistics() {
	return (
		<section className={s.statistics}>
			<p>
				<span>Robo School –</span> учреждение для формирования кадрового
				педагогического резерва в сфере робототехники и программирования
			</p>
			<StatisticsContainer />
		</section>
	);
}
