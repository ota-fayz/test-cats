// export const apiKey = process.env.REACT_API_KEY
// export const baseUrl = process.env.REACT_BASE_URL

// Usually we have to add it to the .env file
const apiKey = "live_lJBxGjqUlPscy2rNQnilTrn8PAD0giWTYVJvWr4VO7m75grOF4V66VBbN4b8VFKC"
export const baseUrl = "https://api.thecatapi.com/v1/images/search?"
export const config = {
	method: "GET",
	headers: {
		"x-api-key": apiKey
	}
}