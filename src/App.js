// import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import Route from "./components/Route";

import "./App.css";

const App = () => {
	return (
		<div className="ui container">
			<Header />
			<Navigation />
			<Route path="/">
				<Home />
			</Route>
			<Route path="/contact">
				<Contact />
			</Route>
			{/* <Footer /> */}
		</div>
	);
};

export default App;
