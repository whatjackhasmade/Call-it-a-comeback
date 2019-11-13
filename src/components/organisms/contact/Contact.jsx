import React, { useState } from "react";

import ContactForm from "./Fields";
import ContactComponent from "./Contact-Styles";

function Contact() {
	const [bot, setBot] = useState("");
	const [company, setCompany] = useState("");
	const [email, setEmail] = useState("");
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [message, setMessage] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const encode = data => {
		return Object.keys(data)
			.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
			.join("&");
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (bot !== "") alert("You've entered the bot field with data");

		fetch("/", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: encode({
				"form-name": "contact",
				company,
				email,
				firstname,
				lastname,
				message,
				submitted
			})
		})
			.then(() => setSubmitted(true))
			.catch(error => alert(error));
	};

	return (
		<ContactComponent>
			<div className="contact__wrapper">
				<h2>
					{!submitted
						? `Tell Me About Your Project`
						: `Awesome, I've Got The Info`}
				</h2>
				{submitted && (
					<p>
						I'll send you an email in the next few hours and we can go from
						there{" "}
						<span role="img" aria-label="smiling face">
							😊
						</span>
					</p>
				)}
				<ContactForm
					bot={bot}
					company={company}
					handleSubmit={handleSubmit}
					email={email}
					firstname={firstname}
					lastname={lastname}
					message={message}
					submitted={submitted}
					setBot={setBot}
					setCompany={setCompany}
					setEmail={setEmail}
					setFirstname={setFirstname}
					setLastname={setLastname}
					setMessage={setMessage}
					setSubmitted={setSubmitted}
				/>
			</div>
		</ContactComponent>
	);
}

export default Contact;
