import s from './ContactPage.module.css';

export default function ContactPage() {
	return (
		<div className={`${s.contact_wrapper} ${s.content_line}`}>
			<h2>Contact our support team</h2>

			<div className={s.contact}>
				<div className={`${s.byPhone} ${s.box}`}>
					<div className={`${s.phone} ${s.pics}`}></div>

					<h4>BY PHONE</h4>

					<p>Monday to Friday, 9am to 6pm GMT</p>

					<a href='tel:+491761111111'>+49 (176) 11-11-111</a>
				</div>

				<div className={`${s.byEmail} ${s.box}`}>
					<div className={`${s.email} ${s.pics}`}></div>

					<h4>NEW CASE</h4>

					<p>
						Just send us your questions and we will give you the help you need.
					</p>

					<button>SEND MESSAGE</button>
				</div>

				<div className={`${s.byChat} ${s.box}`}>
					<div className={`${s.chat} ${s.pics}`}></div>

					<h4>LIVE CHAT</h4>

					<p>Chat with a member of our team.</p>

					<button>START CHAT</button>
				</div>
			</div>

			<div className={s.address}>
				<h3>Our Company Address</h3>
				<p>Dean's Yard,</p>
				<p>London SW1P 3PA,</p>
				<p>Great Britain</p>
			</div>
		</div>
	);
}
