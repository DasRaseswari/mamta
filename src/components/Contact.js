import { phone, email, googleMapLink, storeLocation } from "../utils/dataConstants";

const Contact = () => {
	return (
		<div className="ui raised very padded text segment">
			<h2>Phone:</h2>
			<a href={`tel:${phone}`}>
				<i className="in flag"></i> {phone}
			</a>
			<h2>Email:</h2>
			<a href={`mailto:${email}`}>
				<i className="envelope icon"></i> {email}
			</a>
			<h2>Address:</h2>
			<a href={googleMapLink} target="_blank" rel="noreferrer">
				<i className="map pin icon"></i> {storeLocation}
			</a>
		</div>
	);
};

export default Contact;
