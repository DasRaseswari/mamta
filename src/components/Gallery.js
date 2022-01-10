import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import faker from "faker";

import bannerImg from "../images/background.png";

// const cardList = [
// 	{
// 		src: "https://picsum.photos/id/1015/1920/426",
// 		title: "Red and Beige Dress",
// 		text: "A classy red and beige Assamese dress for your next celebration"
// 	},
// 	{
// 		src: "https://picsum.photos/id/1016/1920/426",
// 		title: "Blue and Beige Dress",
// 		text: "A classy red and beige Assamese dress for your next celebration"
// 	}
// ];

const Gallery = () => {
	let { category } = useParams();

	const renderCardItem = (idx) => {
		return (
			<Col key={idx}>
				<Card style={{ width: "18rem", margin: "auto" }} className="text-center">
					<Card.Img variant="top" src={faker.image.image()} alt="Card image" />
					<Card.Body variant="top">
						<Card.Title alt="Sample title" className="card-text">
							{faker.commerce.productName()}
						</Card.Title>
						<Card.Text className="card-text">{faker.commerce.productDescription()}</Card.Text>
						<Card.Text>&#8377;{faker.commerce.price()}</Card.Text>
						<Button variant="primary">Add to Favorites</Button>
					</Card.Body>
				</Card>
			</Col>
		);
	};

	return (
		<>
			<div className="category-banner">
				<img src={bannerImg} className="banner-image"></img>
				<div className="category-banner-text">
					<h2>{category.toUpperCase()}</h2>
				</div>
			</div>

			<Row xs={1} md={4} className="g-4">
				{Array.from({ length: Math.floor(Math.random() * 30) }).map((_, idx) =>
					renderCardItem(idx)
				)}
			</Row>
		</>
	);
};

export default Gallery;
