export default function UserCard(props) {
	const { image, name, salary, id } = props;
	return (
		<div className='user_item'>
			<div className='left'>
				<img src={image} alt='photo' />
			</div>
			<div className='right'>
				<p>
					<strong>Name:</strong> {name}
				</p>
				<p>
					<strong>Salary:</strong> {salary}
				</p>
				<p>
					<strong>User number:</strong> {id}
				</p>
			</div>
		</div>
	);
}
