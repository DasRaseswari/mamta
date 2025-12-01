import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import App from "./App";

const container = document.getElementById("root");
// Use createRoot to create a root instance
const root = ReactDOM.createRoot(container);

// Render the app using the root instance's render method
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
