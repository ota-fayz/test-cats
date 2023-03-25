import { StyledButton } from "./style"
import { ComponentPropsWithoutRef, ReactNode } from "react"
interface IButton extends ComponentPropsWithoutRef<"button"> {
	children: ReactNode;
	disabled?: boolean
}

export const Button = ({ children, disabled = false, ...props }: IButton) => {
	return (
		<StyledButton
			disabled={disabled}
			{...props}
		>
			{children}
		</StyledButton>
	)
}