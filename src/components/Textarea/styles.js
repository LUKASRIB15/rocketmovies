import styled from "styled-components";

export const TextareaLayout = styled.textarea`
  background-color: ${props=>props.theme.colors['gray-800']};
  border: 0;
  outline: 0;
  resize: none;
  width: 100%;
  color: ${props=>props.theme.colors.white};
  border-radius: 10px;
  padding: 1.6rem;
  height: 274px;
  grid-area: textarea;

  &::placeholder{
    color: ${props=>props.theme.colors['gray-300']};
  }
`