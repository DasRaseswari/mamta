const Contact = () => {
	return (
		<div className="ui raised very padded text segment">
			<h2>Phone:</h2>{" "}
			<a href="tel:+919437021904">
				{" "}
				<i class="in flag"></i> +91 94370 21904
			</a>
			<h2>Email:</h2>
			<a href="mailto:mamatadas026@gmail.com">
				{" "}
				<i class="envelope icon"></i> mamatadas026@gmail.com
			</a>
			<h2>Address:</h2>{" "}
			<a href="https://goo.gl/maps/ScGwAqdtyBkkGXsS6" target="_blank">
				{" "}
				<i class="map pin icon"></i> Patia, Koel Campus, Infront of Allahabad Bank, near Raymond
				Show Room, Bhubaneswar, Odisha 751024{" "}
			</a>
		</div>
	);
};

export default Contact;
