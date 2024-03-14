import pizzaImage from '../assets/pizza.png';

function Post(props) {
	const { title, text, author } = props;

	return (
		<div className='post'>
			<h1>{title}</h1>
			<img src={pizzaImage} alt='pizza' className='pizza' />
			<p>{text}</p>
			<p>Author: {author}</p>
		</div>
	);
}

export default Post;
