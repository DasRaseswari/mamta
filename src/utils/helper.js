export const getPrice = () => {
	return `₹${Math.floor(Math.random() * (1000000 - 50000) + 50000) / 100}`;
};

export const getProductTitle = (tags) => {
	return `${tags[0].title} ${tags[1].title} ${tags[2].title}`;
};
