import { useParams } from "react-router-dom";

const Gallery = () => {
	let { category } = useParams();
	return <div>{category}</div>;
};

export default Gallery;
