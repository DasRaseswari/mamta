import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

import "./App.css";

const App = () => {
	return (
		<Router>
			<div className="ui container">
				<Header />
				<Navigation />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/gallery/:category" element={<Gallery />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
