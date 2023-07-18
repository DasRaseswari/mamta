import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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
			<div className="ui grid">
				<div className="eleven wide column">
					<h3>{text}</h3>
				</div>
				<div className="five wide column">
					<h4 className="ui right aligned yellow header">
						{price}
						<div className="sub header">inclusive of all taxes</div>
					</h4>
				</div>
			</div>
			<br />
			<img className="ui centered rounded fluid image" src={src} alt={title}></img>
			<br />
			<h2>Overview</h2>
			<div className="ui divider"></div>
			<p style={{ textAlign: "justify" }}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</div>
	);
};

export default Product;
