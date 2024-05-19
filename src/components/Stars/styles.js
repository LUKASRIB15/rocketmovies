import styled from "styled-components";

export const StarsLayout = styled.div`
  display: flex;
  gap: 1rem;

  & > svg{
    color: ${props=>props.theme.colors.red};
  }
` 