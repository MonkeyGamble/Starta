import React from 'react';
import Age from './Age';

export default function About({ firstname, lastname }) {
	return (
		<div>
			Hi, my name is {firstname} {lastname}. I'm <Age age='30' /> years old.
		</div>
	);
}
