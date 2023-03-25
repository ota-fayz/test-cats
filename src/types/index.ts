interface ICats {
	breeds: []
	id: string
	url: string
	width: number
	height: number
}

export interface IRequestState {
	data: ICats[],
	isLoading: boolean,
	error: null
}