import { useEffect, useState } from "react"
import { baseUrl, config } from "../config"
import { IRequestState } from "../types"

export const useApp = () => {
	const [isChecked, setIsChecked] = useState({
		enabled: true,
		refresh: false
	})
	const [requestState, setRequestState] = useState<IRequestState>({
		data: [],
		isLoading: true,
		error: null
	})

	const handleChangeEnabled = () => {
		setIsChecked((prevState) => ({
			...prevState,
			enabled: !prevState.enabled
		}))
	}

	const handleChangeRefresh = () => {
		setIsChecked((prevState) => ({
			...prevState,
			refresh: !prevState.refresh
		}))
	}

	const fetchData = async () => {
		setRequestState((prevState) => ({
			...prevState,
			isLoading: true,
			error: null
		}))

		try {
			const res = await fetch(baseUrl, config)
			if(!res.ok) {
				throw new Error('Something went wrong')
			}
			const json = await res.json()
			setRequestState((prevState) => ({
				...prevState,
				data: json
			}))
		} catch(err: any) {
			setRequestState((prevState) => ({
				...prevState,
				error: err.message
			}))
		} finally {
			setRequestState((prevState) => ({
				...prevState,
				isLoading: false,
			}))
		}

	}

	useEffect( () => {
		(async () => {
			await fetchData()
		})()
	}, [])

	useEffect( () => {
		const interval = setInterval(async () => {
			if (isChecked.refresh) {
				await fetchData()
			}
		}, 5000)

		return () => clearInterval(interval)

	}, [isChecked.refresh])

	const handleGetData = async () => {
		await fetchData()
	}

	return {
		isChecked,
		handleChangeEnabled,
		handleChangeRefresh,
		handleGetData,
		requestState
	}
}