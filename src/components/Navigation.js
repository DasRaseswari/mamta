import { Link, useLocation } from "react-router-dom";

import { categoryTypes } from "../utils/dataConstants";

const CategoryComp = ({ category }) => {
	const categoryLower = category.toLowerCase();
	const isActive = usePathClass(`/gallery/${categoryLower}`);
	return (
		<Link to={`/gallery/${categoryLower}`} className={`${isActive}item`}>
			{category}
		</Link>
	);
};

const Navigation = () => {
	return (
		<div className="ui secondary pointing menu navigation">
			<Link to="/" className={`${usePathClass("/")}item`}>
				Home
			</Link>
			{categoryTypes.map((category, i) => (
				<CategoryComp category={category} key={i} />
			))}
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
