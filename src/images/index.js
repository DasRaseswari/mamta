const images = {
	logo: require("./logo.png").default,
	banner: require("./banner.png").default,
	carousel: {},
	product1: require("./product1.jpg").default
};

// adding carousel images dynamically
for (let i = 1; i < 10; i++) {
	images["carousel"][i] = require(`./carousel/carousel${i}.jpg`).default;
}

export default images;
