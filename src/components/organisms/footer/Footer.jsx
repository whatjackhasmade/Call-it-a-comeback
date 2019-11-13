import React, { useEffect } from "react";
import MailtoUI from "mailtoui/dist/mailtoui-min.js";

import FooterComponent from "./FooterStyles";

import IconGithub from "../../../assets/images/icons/brands/github.svg";
import IconLinkedIn from "../../../assets/images/icons/brands/linkedin.svg";
import IconTwitter from "../../../assets/images/icons/brands/twitter.svg";
import IconYouTube from "../../../assets/images/icons/brands/youtube.svg";

function Footer() {
	useEffect(() => {
		if (typeof window !== `undefined`) {
			MailtoUI.run(); // <--- Run MailtoUI manually
		}
	});

	return (
		<FooterComponent>
			<div className="footer__contents">
				<nav className="footer__cta">
					<a className="mailtoui" href="mailto:jack@noface.co.uk">
						<div className="footer__arrow" />
						<div className="footer__cta__content">
							<span className="footer__tagline">
								Always available for a chat
							</span>
							<span className="footer__name">Jack Pritchard</span>
						</div>
					</a>
				</nav>
				<nav className="footer__contact">
					<a href="tel:07393 357520">07393 357520</a>
					<a className="mailtoui" href="mailto:jack@noface.co.uk">
						jack@noface.co.uk
					</a>
				</nav>
				<nav className="footer__social">
					<a href="https://twitter.com/whatjackhasmade">
						<IconTwitter /> Twitter
					</a>
					<a href="https://github.com/whatjackhasmade">
						<IconGithub /> Github
					</a>
					<a href="https://linkedin.com/in/whatjackhasmade">
						<IconLinkedIn /> LinkedIn
					</a>
					<a href="https://youtube.com/whatjackhasmade">
						<IconYouTube /> YouTube
					</a>
				</nav>
			</div>
		</FooterComponent>
	);
}

export default Footer;
