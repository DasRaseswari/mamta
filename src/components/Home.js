import Carousel from "react-bootstrap/Carousel";

const carouselList = [
	{
		src: "https://images.forestessentialsindia.com/pub/media/catalog/category/perfumes_1880x640.jpg",
		alt: "First Slide",
		title: "Image 1",
		desc: "A sample image"
	},
	{
		src: "https://picsum.photos/id/1015/1920/426",
		alt: "Second Slide",
		title: "Image 2",
		desc: "This is a description"
	},
	{
		src: "https://picsum.photos/1920/426",
		alt: "Third Slide",
		title: "Image 3",
		desc: "This is a placeholder"
	}
];

const Home = () => {
	const renderCarouselItem = () => {
		return carouselList.map(({ src, alt, title, desc }) => {
			return (
				<Carousel.Item interval={5000}>
					<img className="d-block w-1000" src={src} alt={alt} />
					<Carousel.Caption>
						<h3>{title}</h3>
						<p>{desc}</p>
					</Carousel.Caption>
				</Carousel.Item>
			);
		});
	};

	return <Carousel>{renderCarouselItem()}</Carousel>;
};

export default Home;
