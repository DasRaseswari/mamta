import Carousel from "react-bootstrap/Carousel";

import images from "../images";

const carouselList = [
	{
		src: images.carousel[1],
		title: "Handmade Embroidery",
		desc: "on blouses and kurtis"
	},
	{
		src: images.carousel[2],
		title: "Personalized Designs",
		desc: "uniquely yours"
	},
	{
		src: images.carousel[3],
		title: "Customized Accessories",
		desc: "tailored for your everyday needs"
	}
];

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
			<div class="ui raised padded yellow container segment">
				<h2 class="ui header">About Us</h2>
				<p>
					Mamta's collections are inspired by a trend of strong, dignified, independent women with a
					purpose, who know their worth and can achieve anything they set their minds on. Mamta
					showcases a collection of handloom textiles with soft embroidery designs, perfect for all
					women, celebrating freedom, grace and power.
				</p>
			</div>
			<br />
		</div>
	);
};

export default Home;
