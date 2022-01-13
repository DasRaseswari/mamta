import faker from "faker";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import unsplash from "../api/unsplash";

import bannerImg from "../images/banner.png";

const processImages = (photos) => {
	return photos.map((photo) => {
		const { id, alt_description, tags, urls } = photo;
		let title = `${tags[0].title} ${tags[1].title} ${tags[2].title}`;
		return {
			id: id,
			src: urls.small,
			title: title,
			text: alt_description
		};
	});
};

const Gallery = () => {
	let { category } = useParams();
	const [images, setImages] = useState([]);

	useEffect(async () => {
		let response = await unsplash.search.getPhotos({
			query: category,
			page: Math.floor(Math.random() * 10),
			perPage: Math.floor(Math.random() * 20)
		});

		if (response.status != 200) {
			console.log(response);
		} else {
			let photos = response.response.results;
			setImages(processImages(photos));
		}
	}, [category]);

	const renderCardItem = ({ id, src, title, text }) => {
		return (
			<Col key={id}>
				<Card style={{ width: "18rem", margin: "auto" }} className="text-center">
					<Card.Img variant="top" src={src} alt="Card image" className="card-image" />
					<Card.Body variant="top">
						<Card.Title alt={title} className="card-title">
							{title}
						</Card.Title>
						<Card.Text className="text">{text}</Card.Text>
						<Card.Text>&#8377;{faker.commerce.price()}</Card.Text>
						<Button variant="primary">Add to Favorites</Button>
					</Card.Body>
				</Card>
			</Col>
		);
	};

	return (
		<div>
			<div className="category-banner">
				<img src={bannerImg} className="banner-image"></img>
				<div className="category-banner-text">
					<h2>{category.toUpperCase()}</h2>
				</div>
			</div>

			<Row xs={1} md={4} className="g-4">
				{images.map((image) => renderCardItem(image))}
			</Row>
		</div>
	);
};

export default Gallery;
