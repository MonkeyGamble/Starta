import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './pages/MainPage/index.jsx';
import NotFoundPage from './pages/NotFoundPage/index.jsx';
import ProductsPage from './pages/ProductsPage/index.jsx';

export default function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path='/products' element={<ProductsPage />} />
					<Route path='/*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</div>
	);
}
