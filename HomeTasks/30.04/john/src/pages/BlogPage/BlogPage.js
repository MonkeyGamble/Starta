import s from './BlogPage.module.css';

export default function BlogPage() {
	let data = {
		header: 'UI Interactions of the week',
		date: '12 Feb 2019',
		pipe: '|',
		theme: 'Express, Handlebars',
		text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
	};

	return (
		<div className={`${s.blog_wrapper} ${s.content_line}`}>
			<h1>Blog</h1>
			<div className={s.blogs}>
				<div className={s.blog_section}>
					<h2>{data.header}</h2>
					<div className={s.blog_content}>
						<p>{data.date}</p>
						<p>{data.pipe}</p>
						<p>{data.theme}</p>
					</div>
					<p className={s.text}>{data.text}</p>
				</div>
				<div className={s.blog_section}>
					<h2>{data.header}</h2>
					<div className={s.blog_content}>
						<p>{data.date}</p>
						<p>{data.pipe}</p>
						<p>{data.theme}</p>
					</div>
					<p>{data.text}</p>
				</div>
				<div className={s.blog_section}>
					<h2>{data.header}</h2>
					<div className={s.blog_content}>
						<p>{data.date}</p>
						<p>{data.pipe}</p>
						<p>{data.theme}</p>
					</div>
					<p>{data.text}</p>
				</div>
				<div className={s.blog_section}>
					<h2>{data.header}</h2>
					<div className={s.blog_content}>
						<p>{data.date}</p>
						<p>{data.pipe}</p>
						<p>{data.theme}</p>
					</div>
					<p>{data.text}</p>
				</div>
			</div>
		</div>
	);
}
