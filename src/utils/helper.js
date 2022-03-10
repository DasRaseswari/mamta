export const getPrice = () => {
	return `₹${Math.floor(Math.random() * (1000000 - 50000) + 50000) / 100}`;
};

export const getProductTitle = (tags) => {
	let title = "";

	// taking the first three words from the tags array
	const upperBoundTags = tags.length >= 3 ? 3 : tags.length;
	for (let i = 0; i < upperBoundTags; i++) {
		title += `${tags[i].title} `;
	}
	return title;
};
