import styled from "styled-components"

export const ContainerCheckbox = styled.div`
  display: flex;
  gap: 4px;
  align-items: start;
`

export const Icon = styled.svg`
  fill: none;
  stroke: black;
  stroke-width: 4px;
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  height: 0;
  width: 0;
`

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  background: var(--main-gray);
  width: 16px;
  height: 16px;
  border-radius: 4px;
  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`

export const Label = styled.span<{ disabled: boolean }>`
  color: ${props => (props.disabled ? 'rgb(16, 16, 16, 0.3)' : 'black')}
`
