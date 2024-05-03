import s from './RecentPosts.module.css';

export default function PostItem(props) {
	const [title, text, tags, date] = props;

	const tags_string = tags.join(', ');

	return (
		<div>
			<div className={s.box}>
				<h2>Making a design system from scratch</h2>
				<div className={s.box_content}>
					<p>12 Feb 2020</p>
					<p>|</p>
					<p>Design, Pattern</p>
				</div>
				<p>
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
					sint. Velit officia consequat duis enim velit mollit. Exercitation
					veniam consequat sunt nostrud amet.
				</p>
			</div>
			<div className={s.box}>
				<h2>Creating pixel perfect icons in Figma</h2>
				<div className={s.box_content}>
					<p>12 Feb 2020</p>
					<p>|</p>
					<p>Figma, Icon Design</p>
				</div>
				<p>
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
					sint. Velit officia consequat duis enim velit mollit. Exercitation
					veniam consequat sunt nostrud amet.
				</p>
			</div>
		</div>
	);
}
