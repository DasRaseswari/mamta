import { createApi } from "unsplash-js";

const unsplash = new createApi({
	accessKey: process.env.REACT_APP_UNSPLASH_API_ACCESS_KEY
});

export default unsplash;
