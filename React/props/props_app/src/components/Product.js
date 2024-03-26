export default function Product(props) {
	const { img, title, price } = props;

	return (
		<div className='product_item'>
			<img src={img} />
			<h2>{title}</h2>
			<h3>Стоимость: {price}</h3>
		</div>
	);
}
