import s from './Footer.module.css';
import instagram from '../../assets/insta.png';

export default function Footer() {
	return (
		<div className={`${s.footer_wrapper} ${s.content_line}`}>
			<div className={s.socials}>
				<a
					href='https://www.facebook.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					<div className={`${s.facebook} ${s.logos}`}></div>
				</a>
				<a
					href='https://www.instagram.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					{/* <div className={`${s.instagram} ${s.logos}`}></div> */}
					<img src={instagram} alt='' />
				</a>
				<a
					href='https://www.twitter.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					<div className={`${s.twitter} ${s.logos}`}></div>
				</a>
				<a
					href='https://www.linkedin.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					<div className={`${s.linkedin} ${s.logos}`}></div>
				</a>
			</div>
			<p>Copyright ©2020 All rights reserved </p>
		</div>
	);
}
