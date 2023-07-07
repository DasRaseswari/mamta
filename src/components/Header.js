import logo from "../images/logo.png";

const Header = () => {
	return (
		<div className="logo" onClick={() => (window.location.href = "/")}>
			<img className="ui centered small image" src={logo} alt="logo" />
		</div>
	);
};

export default Header;
