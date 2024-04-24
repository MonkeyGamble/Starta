import React from 'react';
import ProductItem from './ProductItem';

export default function ProductList(props) {
	const { data } = props;

	return (
		<div className='product_container'>
			{data.map(elem => {
				return (
					<ProductItem
						key={elem.id}
						id={elem.id}
						name={elem.name}
						price={elem.price}
					/>
				);
			})}
		</div>
	);
}
