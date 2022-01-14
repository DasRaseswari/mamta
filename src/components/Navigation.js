import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
	const useGalleryCategoryLink = (category) => {
		const categoryLower = category.toLowerCase();
		return (
			<Link
				to={`/gallery/${categoryLower}`}
				className={`${usePathClass(`/gallery/${categoryLower}`)}item`}
			>
				{category}
			</Link>
		);
	};

	return (
		<div className="ui secondary pointing menu navigation">
			<Link to="/" className={`${usePathClass("/")}item`}>
				Home
			</Link>
			{useGalleryCategoryLink("Dress")}
			{useGalleryCategoryLink("Kurti")}
			{useGalleryCategoryLink("Sari")}
			{useGalleryCategoryLink("Blouse")}
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
