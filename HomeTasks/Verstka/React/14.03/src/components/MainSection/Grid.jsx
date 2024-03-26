export default function Grid(props) {
	const { color, text } = props;
	return (
		<div className='grid'>
			<div className='grid_box' style={{ backgroundColor: color }}>
				<hr />
				<p>{text}</p>
			</div>
		</div>
	);
}
