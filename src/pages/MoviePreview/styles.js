import styled from "styled-components";

export const MoviePreviewLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: max-content 1fr;
  grid-template-areas: 
    "header"
    "content"
  ;
`

export const WrapperInRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${props=>props.gap}rem;

  img{
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid ${props=>props.theme.colors['gray-600']};
  }

  svg{
    color: ${props=>props.theme.colors.red};
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

`

export const MoviePreviewMain = styled.main`
  grid-area: content;
  max-width: 1137px;
  margin: 0 auto;
  padding: 4rem 2.4rem 10rem;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  &::-webkit-scrollbar{
    width: 8px;
  }

  &::-webkit-scrollbar-track{
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb{
    background-color: ${props=>props.theme.colors.red};
    border-radius: 8px;
  }

  & > div:nth-child(1){
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    h1{
      font-size: clamp(2.8rem, 3vw, 3.6rem);
      font-weight: 500;
    }
  }

  & > p{
    text-align: justify;
    font-size: clamp(1.2rem, 3vw, 1.6rem);
  }
`