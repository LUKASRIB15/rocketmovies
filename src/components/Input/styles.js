import styled from "styled-components";

export const InputLayout = styled.div`
  display: flex;
  width: 100%;
  max-width: 630px;
  min-width: 280px;
  background-color: ${props=>props.theme.colors['gray-800']};
  padding: 2rem 1.6rem;
  border-radius: 10px;
  gap: 1.6rem;
  align-items: center;

  & > svg{
    color:  ${props=>props.theme.colors['gray-300']};
  }
`

export const LabelLayout = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: 0;
  outline: 0;
  color: ${props=>props.theme.colors.white};

  &::placeholder{
    color: ${props=>props.theme.colors['gray-300']};
  }

  &:disabled{
    opacity: 0.5;
  }
`