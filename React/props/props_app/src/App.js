import React from 'react';
import Product from './components/Product';
import UserCard from './components/UserCard';

export default function App() {
	let products = [
		{
			id: 1,
			title: 'Apple',
			price: 300,
			img: 'https://www.calliaweb.co.uk/wp-content/uploads/2015/10/apple-600-600x600.jpeg',
		},
		{
			id: 2,
			title: 'Banana',
			price: 400,
			img: 'https://images.tanlash.uz/i3/firms/231/0/55/dual-mode-dual-chip-lokmat-appllp-4-pro-1-6-inch-400-400px-screen-octa-core-6g-128g-android-smartwatch-sim-card-wifi-d_d61f0c45faafacf_800x600.webp.jpg',
		},
		{
			id: 3,
			title: 'Monitor',
			price: 2500,
			img: 'https://logowik.com/content/uploads/images/t_minecraft5608.jpg',
		},
	];

	let users = [
		{
			id: 1,
			name: 'Steven',
			image: 'https://i.ibb.co/tXqmKKR/1.png',
			salary: '5000',
		},
		{
			id: 2,
			name: 'Neena',
			image: 'https://i.ibb.co/yYxK3cq/2.png',
			salary: '10000',
		},
		{
			id: 3,
			name: 'John',
			image: 'https://i.ibb.co/SNqFDbB/3.png',
			salary: '4500',
		},
		{
			id: 4,
			name: 'Rogers',
			image: 'https://i.ibb.co/WnG0fVZ/4.png',
			salary: '3400',
		},
		{
			id: 5,
			name: 'Cevin',
			image: 'https://i.ibb.co/vdQK54J/6.png',
			salary: '500',
		},
		{
			id: 6,
			name: 'Alshey',
			image: 'https://i.ibb.co/wSJN6db/5.png',
			salary: '1210',
		},
		{
			id: 7,
			name: 'Milki',
			image: 'https://i.ibb.co/JpnDnH5/7.png',
			salary: '1210',
		},
		{
			id: 8,
			name: 'Polar',
			image: 'https://i.ibb.co/SnNLhgg/9.png',
			salary: '1210',
		},
		{
			id: 9,
			name: 'Grindell',
			image: 'https://i.ibb.co/fGH3RPW/8.png',
			salary: '1210',
		},
	];

	return (
		<div>
			<div className='product_wrapper'>
				{products.map((elem, index) => (
					<Product
						key={elem.id} //{index}
						img={elem.img}
						title={elem.title}
						price={elem.price}
					/>
				))}
			</div>
			<div className='user_wrapper'>
				{users.map(elem => (
					<UserCard
						key={elem.id}
						image={elem.image}
						name={elem.name}
						salary={elem.salary}
						id={elem.id}
					/>
				))}
			</div>
		</div>
	);
}
