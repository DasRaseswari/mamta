import { useState, useEffect } from "react";

import Link from "./Link";

const Navigation = () => {
	// TODO - make active elements on click action

	return (
		<div className="ui secondary pointing menu navigation">
			<Link href="/" className="item">
				Home
			</Link>
			<a className="item">Dress</a>
			<a className="item">Sari</a>
			<div className="right menu">
				<Link href="/contact" className="ui item">
					Contact Us
				</Link>
			</div>
		</div>
	);
};

export default Navigation;
