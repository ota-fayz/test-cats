import styled from "styled-components"

export const StyledButton = styled.button`
  padding: 10px 15px;
  cursor: ${(props) => props.disabled ? null : "pointer"};
  border: 1px solid black;
  background-color: var(--main-gray);
`