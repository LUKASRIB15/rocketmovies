import styled from "styled-components";

export const ButtonLayout = styled.button`
  width: 100%;
  padding: 1.6rem;
  background-color: ${props=>props.theme.colors.red};
  color: ${props=>props.theme.colors['gray-700']};
  font-weight: 500;
  border: 0;
  border-radius: 10px;

  transition: all 0.2s;

  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }
`