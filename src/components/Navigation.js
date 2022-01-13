import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
	return (
		<div className="ui secondary pointing menu navigation">
			<Link to="/" className={`${usePathClass("/")}item`}>
				Home
			</Link>
			<Link to="/gallery/kurti" className={`${usePathClass("/gallery/kurti")}item`}>
				Kurti
			</Link>
			<Link to="/gallery/sari" className={`${usePathClass("/gallery/sari")}item`}>
				Sari
			</Link>
			<div className="right menu">
				<Link to="/contact" className={`${usePathClass("/contact")}ui item`}>
					Contact Us
				</Link>
			</div>
		</div>
	);
};

// usePathClass is a custom hook to set the active menu based on current path
const usePathClass = (requiredPath) => {
	return useLocation().pathname == requiredPath ? "active " : "";
};

export default Navigation;
