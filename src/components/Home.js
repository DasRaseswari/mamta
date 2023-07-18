import Carousel from "react-bootstrap/Carousel";

import { carouselList, aboutUs } from "../utils/dataConstants";

import Contact from "./Contact";

const Home = () => {
	const renderCarouselItem = () => {
		return carouselList.map(({ src, title, desc }) => {
			return (
				<Carousel.Item interval={5000}>
					<img className="d-block w-1000 carousel-item img-fluid" src={src} alt={title} />
					<Carousel.Caption>
						<h3>{title}</h3>
						<p>{desc}</p>
					</Carousel.Caption>
				</Carousel.Item>
			);
		});
	};

	return (
		<div className="ui container">
			<Carousel>{renderCarouselItem()}</Carousel>
			<div class="ui raised yellow segment">
				<h2 class="ui header">About Us</h2>
				<p>{aboutUs}</p>
			</div>
			<Contact></Contact>
			<br />
		</div>
	);
};

export default Home;
