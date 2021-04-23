import React from 'react';

function ContactPage(){
	return(
		<div className="ContactPage">
			<div className="contactCard">
				<div className="contactSection">
					<h1>Contact</h1>
					<div className="contactForm">
						<input type="text" name="name" placeholder="Full name"/>
						<input type="text" name="email" placeholder="Email"/>
						<textarea className="message" name="message" placeholder="Message"/>
					</div>
					<button className="button">Submit</button>
				</div>
			</div>
		</div>
	);
}

export default ContactPage;