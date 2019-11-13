import React from "react";

import ContactFormComponent from "./Fields-Styles";

function ContactForm({
	bot,
	company,
	email,
	firstname,
	handleSubmit,
	lastname,
	message,
	submitted,
	setBot,
	setCompany,
	setEmail,
	setFirstname,
	setLastname,
	setMessage
}) {
	return (
		<ContactFormComponent
			name="contact"
			method="post"
			data-netlify="true"
			data-netlify-honeypot="bot"
			onSubmit={e => handleSubmit(e)}
			className={
				!submitted ? `contact__form` : `contact__form contact__form--hidden`
			}
		>
			<input
				type="hidden"
				name="bot"
				id="bot"
				onChange={e => setBot(e.target.value)}
				value={bot}
			/>
			<div className="row">
				<div className="col">
					<label htmlFor="firstname">First Name</label>
					<input
						type="text"
						name="firstname"
						id="firstname"
						onChange={e => setFirstname(e.target.value)}
						value={firstname}
					/>
				</div>
				<div className="col">
					<label htmlFor="lastname">Last Name</label>
					<input
						type="text"
						name="lastname"
						id="lastname"
						onChange={e => setLastname(e.target.value)}
						value={lastname}
					/>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<label htmlFor="email">Email</label>
					<input
						type="text"
						name="email"
						id="email"
						onChange={e => setEmail(e.target.value)}
						value={email}
					/>
				</div>
				<div className="col">
					<label htmlFor="company">Company</label>
					<input
						type="text"
						name="company"
						id="company"
						onChange={e => setCompany(e.target.value)}
						value={company}
					/>
				</div>
			</div>
			<label htmlFor="message">Tell Me About Your Project</label>
			<textarea
				name="message"
				id="message"
				rows="6"
				onChange={e => setMessage(e.target.value)}
				value={message}
			/>
			<button type="submit" value="Send Message">
				Send Message
			</button>
		</ContactFormComponent>
	);
}

export default ContactForm;
