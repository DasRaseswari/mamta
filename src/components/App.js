import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Navigation from "./Navigation";
import "./App.css";

const App = () => {
	return (
		<div className="ui container">
			<Header />
			<Navigation />
			<Home />
			<Footer />
		</div>
	);
};

export default App;
