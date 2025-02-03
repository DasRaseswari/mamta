export const getPrice = () => {
	return `₹${Math.floor(Math.random() * (1000000 - 50000) + 50000) / 100}`;
};
