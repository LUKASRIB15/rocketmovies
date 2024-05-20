import styled from "styled-components";

export const ButtonLayout = styled.button`
  width: 100%;
  max-width: 630px;
  padding: 1.6rem 3.2rem;
  background-color: ${props=>props.theme.colors.red};
  color: ${props=>props.theme.colors['gray-700']};
  font-weight: 500;
  border: 0;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  transition: all 0.2s;

  .sr-only{
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }
`