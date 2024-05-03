import React from 'react';
import NavMenu from '../NavMenu/index';
import { Outlet } from 'react-router-dom';

export default function Layout() {
	return (
		<div>
			<NavMenu />
			<Outlet />
		</div>
	);
}
