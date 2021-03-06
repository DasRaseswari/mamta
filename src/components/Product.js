import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";

import unsplash from "../api/unsplash";
import { getPrice, getProductTitle } from "../utils/helper";

const processProduct = (product) => {
	const { urls, tags, alt_description } = product;
	return {
		src: urls.regular,
		title: getProductTitle(tags),
		text: alt_description,
		price: getPrice()
	};
};

const Product = () => {
	let { productId } = useParams();
	const [product, setProduct] = useState({ src: "", title: "", text: "" });
	let { src, title, text, price } = product;

	useEffect(() => {
		async function fetchData() {
			let response = await unsplash.photos.get({ photoId: productId });

			if (response.status !== 200) {
				console.log(response);
			} else {
				let product = response.response;
				setProduct(processProduct(product));
			}
		}
		fetchData();
	}, [productId]);

	return (
		<div className="ui container segment">
			<div className="ui two column very relaxed grid">
				<div className="column">
					<div className="ui container">
						<img className="ui  centered rounded fluid image" src={src} alt={title}></img>
					</div>
				</div>
				<div className="column">
					<h1>{text} </h1>
					<p>
						<h5>{price}</h5>
						<small>inclusive of all taxes</small>
					</p>
					<div className="ui divider"></div>
					<p style={{ textAlign: "justify" }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
						mollit anim id est laborum.
					</p>
					{/* <Button className="fluid ui button">Add to Favorites</Button> */}
				</div>
			</div>
		</div>
	);
};

export default Product;
