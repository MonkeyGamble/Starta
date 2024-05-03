import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import BlogPage from '../pages/BlogPage/BlogPage';
import WorksPage from '../pages/WorksPage/WorksPage';
import WorksDetailPage from '../pages/WorksPage/WorksDetailPage/WorksDetailPage';
import ContactPage from '../pages/ContactPage/ContactPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Layout from './Layout';

export const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/blog',
				element: <BlogPage />,
			},
			{
				path: '/works',
				element: <WorksPage />,
			},
			{
				path: '/works/:id',
				element: <WorksDetailPage />,
			},
			{
				path: '/contact',
				element: <ContactPage />,
			},
			{
				path: '*',
				element: <NotFoundPage />,
			},
		],
	},
]);
