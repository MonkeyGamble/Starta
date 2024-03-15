import React from 'react';
import Product from '../Product/Product';

export default function ProductsContainer() {
	const productContainer_style = {
		display: 'grid',
		gridTemplateColumns: 'repeat( 2, 1fr)',
		gap: '25px',
		maxWidth: '1000px',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '50px',
	};
	const productPhoto = [
		'https://www.backmarket.de/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d2e6ccujb3mkqf.cloudfront.net/0196c22f-6865-4570-93eb-3a79ddd9332f-1_f83f2a2c-66b6-41d5-889f-2eacbac1ad58.jpg',
		'https://www.backmarket.de/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d2e6ccujb3mkqf.cloudfront.net/ef5660d2-6883-4b81-b47d-86e5720687ef-1_72ddd233-c9b6-4f10-a739-447c440b6357.jpg',
		'https://www.backmarket.de/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d2e6ccujb3mkqf.cloudfront.net/07d31702-640c-45f8-9280-f4457de71632-1_1f48bc36-e5a2-4a9b-aa33-d85dce51127a.jpg',
	];
	return (
		<div style={productContainer_style}>
			<Product
				title='MacBook'
				price='1000'
				category='laptop'
				photo={productPhoto[0]}
			/>
			<Product
				title='iPhone'
				price='1200'
				category='handy'
				photo={productPhoto[1]}
			/>
			<Product
				title='iPad'
				price='1500'
				category='pad'
				photo={productPhoto[2]}
			/>
		</div>
	);
}
