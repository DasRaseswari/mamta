import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import unsplash from "../api/unsplash";
import bannerImage from "../images/banner.png";
import { getPrice } from "../utils/helper";

const processItems = (photos) => {
	return photos.map((photo) => {
		// taking each photo object and cleaning up to get the required properties
		const { id, description, alt_description, urls } = photo;
		return {
			id: id,
			src: urls.small,
			title: alt_description,
			text: description,
			price: getPrice()
		};
	});
};

const Gallery = () => {
	let { category } = useParams();
	const [items, setItems] = useState([]);

	useEffect(() => {
		async function fetchData() {
			let response = await unsplash.search.getPhotos({
				query: category,
				page: Math.floor(Math.random() * 3),
				perPage: Math.floor(Math.random() * 20)
			});

			if (response.status !== 200) {
				console.log(response);
			} else {
				let photos = response.response.results;
				setItems(processItems(photos));
			}
		}
		fetchData();
	}, [category]);

	const renderCardItem = ({ id, src, title, text, price }) => {
		return (
			<Col key={id}>
				<Card className="text-center" onClick={() => window.open(`/product/${id}`)}>
					<Card.Img variant="top" src={src} alt="Card image" className="card-image" />
					<Card.Body variant="top">
						<Card.Title alt={title} className="card-title">
							{title}
						</Card.Title>
						<Card.Text className="text">{text}</Card.Text>
						<div className="ui tag labels">
							<div className="ui label">{price}</div>
						</div>
					</Card.Body>
				</Card>
			</Col>
		);
	};

	return (
		<div className="ui container">
			<div className="category-banner">
				<img src={bannerImage} className="banner-image" alt="banner"></img>
				<div className="category-banner-text">
					<h2>{category.toUpperCase()}</h2>
				</div>
			</div>
			<Row xs={1} md={4} className="g-4">
				{items.map((image) => renderCardItem(image))}
			</Row>
			<br />
		</div>
	);
};

export default Gallery;
