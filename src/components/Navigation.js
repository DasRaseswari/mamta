import Link from "./Link";

const Navigation = ({ currentPath }) => {
	return (
		<div className="ui secondary pointing menu navigation">
			<Link href="/" className={`${currentPath == "/" ? "active " : ""}item`}>
				Home
			</Link>
			<Link href="/dress" className={`${currentPath == "/dress" ? "active " : ""}item`}>
				Dress
			</Link>
			<Link href="/sari" className={`${currentPath == "/sari" ? "active " : ""}item`}>
				Sari
			</Link>
			<div className="right menu">
				<Link href="/contact" className={`${currentPath == "/contact" ? "active " : ""}ui item`}>
					Contact Us
				</Link>
			</div>
		</div>
	);
};

export default Navigation;
