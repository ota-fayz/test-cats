import { ContainerCheckbox, HiddenCheckbox, StyledCheckbox, Icon, Label } from "./style"
import React from "react"

interface ICheckbox {
	label?: string
	checked: boolean
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	disabled?: boolean
}

export const Checkbox = ({ label, checked, onChange, disabled = false }: ICheckbox) => {
	return (
		<label>
			<ContainerCheckbox>
				<HiddenCheckbox
					disabled={disabled}
					checked={checked}
					onChange={onChange}
				/>
				<StyledCheckbox checked={checked}>
					<Icon viewBox="0 0 24 24">
						<polyline points="20 6 9 17 4 12" />
					</Icon>
				</StyledCheckbox>
				<Label disabled={disabled}>
					{label}
				</Label>
			</ContainerCheckbox>
		</label>
	)
}