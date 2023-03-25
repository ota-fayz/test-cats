import React from "react"
import { Container } from "./style"
import { Checkbox, Button, Image } from "../components"
import { useApp } from "./useApp"

function App() {
	const {
		isChecked: { enabled, refresh },
		handleChangeEnabled,
		handleChangeRefresh,
		requestState: { isLoading, error, data },
		handleGetData
	} = useApp()

	const getImageStatus = () => {
		if (isLoading) return "Loading"
		if (error) return error
		if (data.length === 0) return "No cats"
	}

	return (
		<Container>
			<Checkbox
				checked={enabled}
				onChange={handleChangeEnabled}
				label="Enabled"
			/>
			<Checkbox
				disabled={!enabled}
				checked={refresh}
				onChange={handleChangeRefresh}
				label="Auto-refresh every 5 second"
			/>
			<Button
				disabled={!enabled}
				onClick={handleGetData}
			>
				Get cat
			</Button>
			{getImageStatus()}
			<Image
				url={(!error && !isLoading) ? data[0].url : null}
			/>
		</Container>
	)
}

export default App
