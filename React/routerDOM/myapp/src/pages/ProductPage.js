import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import loadingGIF from '../assets/gif/loading.gif';

export default function ProductPage() {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(true);
	const [foundProduct, setFoundProduct] = useState(false);

	useEffect(() => {
		fetch('https://dummyjson.com/products/' + id)
			.then(res => {
				if (res.status === 404) {
					setFoundProduct(true);
				}
				return res.json();
			})
			.then(data => {
				setProduct(data);
				setLoading(false);
			})
			.catch(e => console.log(e));
	}, []);

	if (loading) {
		return (
			<div className='content'>
				<div>
					<img src={loadingGIF} />
				</div>
				Loading...
			</div>
		);
	} else {
		if (foundProduct) {
			return (
				<div className='content'>
					<h2>Product not found 404</h2>
				</div>
			);
		} else {
			return (
				<div className='content'>
					<h3>{product.title}</h3>
					<div className='product'>
						<img src={product.thumbnail} />
						<div>
							<p>Description: {product.description}</p>
							<p>Price: {product.price}</p>
							<p>Rating: {product.rating}</p>
							<p>{`Brand: ${product.category}`}</p>
							<p></p>
						</div>
					</div>
				</div>
			);
		}
	}
}
