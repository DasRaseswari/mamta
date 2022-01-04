import { useState } from "react";

// import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import Route from "./components/Route";

import "./App.css";

const App = () => {
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	return (
		<div className="ui container">
			<Header />
			<Navigation currentPath={currentPath} />
			<Route path="/" currentPath={currentPath} setCurrentPath={setCurrentPath}>
				<Home />
			</Route>
			<Route path="/contact" currentPath={currentPath} setCurrentPath={setCurrentPath}>
				<Contact />
			</Route>
		</div>
	);
};

export default App;
