import images from "../images";

const Header = () => {
	return (
		<div className="logo" onClick={() => (window.location.href = "/")}>
			<img className="ui centered small image" src={images.logo} alt="logo" />
		</div>
	);
};

export default Header;
