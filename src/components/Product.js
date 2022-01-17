import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import unsplash from "../api/unsplash";

import images from "../images";

const processProduct = (product) => {
	const { urls, tags, alt_description } = product;
	let title = `${tags[0].title} ${tags[1].title} ${tags[2].title}`;
	return {
		src: urls.regular,
		title: title,
		text: alt_description
	};
};

const Product = () => {
	let { productId } = useParams();
	const [product, setProduct] = useState({ src: "", title: "", text: "" });
	let { src, title, text } = product;

	useEffect(async () => {
		let response = await unsplash.photos.get({ photoId: productId });

		console.log(response);

		if (response.status != 200) {
			console.log(response);
		} else {
			let product = response.response;
			setProduct(processProduct(product));
		}
	}, [productId]);

	return (
		<div>
			<div className="ui two column very relaxed grid">
				<div className="column">
					<img className="ui rounded image product-image" src={src}></img>
				</div>
				<div className="column">
					<h1>{title} </h1>
					<p>{text}</p>
				</div>
			</div>
		</div>
	);
};

export default Product;
