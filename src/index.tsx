import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./app/App"

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
)
root.render(
	// <React.StrictMode>
		<Suspense fallback="loading">
			<App />
		</Suspense>
	// </React.StrictMode>
)