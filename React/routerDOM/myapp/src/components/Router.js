import { createBrowserRouter } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ContactsPage from '../pages/ContactsPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import ProductListPage from '../pages/ProductListPage';
import ProductPage from '../pages/ProductPage';
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
				path: '/products',
				element: <ProductListPage />,
			},
			{
				path: '/about',
				element: <AboutPage />,
			},
			{
				path: '/contacts',
				element: <ContactsPage />,
			},
			{
				path: '/products/:id',
				element: <ProductPage />,
			},
			{
				path: '*',
				element: <NotFoundPage />,
			},
		],
	},
]);
