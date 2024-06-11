import styled from "styled-components";

export const MarkersLayout = styled.div`
  background-color: ${props=>props.$newmarker ? "transparent" : props.theme.colors['gray-800']};
  width: max-content;
  padding: 1.6rem;
  border-radius: 10px;
  border: ${props=>props.$newmarker ? `2px dashed ${props.theme.colors['gray-300']}` : 'none'};

  

  & > input{
    background-color: transparent;
    border: 0;
    outline: 0;
    color: ${props=>props.theme.colors.white};
    width: max-content;
  }

  & > button{
    background-color: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
    color: ${props=>props.theme.colors.red};
  }

`