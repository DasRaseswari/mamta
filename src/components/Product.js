import { useParams } from "react-router-dom";
import images from "../images";

const Product = () => {
	let { src } = useParams();

	console.log(src);

	return (
		<div>
			{src}
			<img className="img-fluid" src={images.product1}></img>
		</div>
	);
};

export default Product;
