import { StyledImage } from "./style"

interface IImage {
	url: string | null
}

const placeholder = "https://via.placeholder.com/300x300"

export const Image = ({ url }: IImage) => {
	return (
		<StyledImage
			src={url ? url : placeholder}
		/>
	)
}