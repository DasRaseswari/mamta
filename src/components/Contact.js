import { phone, email, googleMapLink, storeLocation } from "../utils/dataConstants";

const Contact = () => {
	return (
		<div className="ui raised yellow segment">
			<h2 class="ui header">Contact Us</h2>
			<br />
			<h3>Phone:</h3>
			<a href={`tel:${phone}`}>
				<i className="in flag"></i> {phone}
			</a>
			<br />
			<br />
			<h3>Email:</h3>
			<a href={`mailto:${email}`}>
				<i className="envelope icon"></i> {email}
			</a>
			<br />
			<br />
			<h3>Address:</h3>
			<a href={googleMapLink} target="_blank" rel="noreferrer">
				<i className="map pin icon"></i> {storeLocation}
			</a>
		</div>
	);
};

export default Contact;
