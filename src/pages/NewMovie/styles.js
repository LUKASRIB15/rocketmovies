import styled from "styled-components";

export const NewMovieLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: max-content 1fr;
  grid-template-areas: 
    "header"
    "content"
  ;
`

export const NewMovieMain = styled.main`
  grid-area: content;
  width: 100%;
  max-width: 1137px;
  margin: 4rem auto;
  overflow-y: auto;
  padding-inline: 2.4rem;

  display: grid;
  grid-template-rows: repeat(8, auto);
  grid-template-columns: repeat(1, auto);
  grid-template-areas: 
    "link"
    "title"
    "titleInput"
    "noteInput"
    "textarea"
    "markers"
    
  ;
  gap: 4rem;

  & > h1{
    grid-area: title;
    margin-top: -1.6rem;
    font-size: 3.6rem;
    font-weight: 500;
  }

  & > div:nth-child(1){
    grid-area: link;
    
    display: flex;
    align-items: center;
    gap: 0.8rem;

    svg{
      color: ${props=>props.theme.colors.red};
    }
    
  }
  & > div:nth-child(2){
    grid-area: titleInput;
  }
  & > div:nth-child(3){
    grid-area: noteInput;
  }

  & > div:nth-child(6){
    grid-area: markers;

    h2{
      font-size: 2rem;
      color: ${props=>props.theme.colors['gray-500']};
      margin-bottom: 2.4rem;
    }

    h2 + div{
      display: flex;
      align-items: center;
      gap: 2.4rem;
      flex-wrap: wrap;
      background-color: ${props=>props.theme.colors.black};
      padding: 1.6rem;
      border-radius: 8px;
      width: 100%;
    }

  }

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

  @media(min-width: 658px){
    grid-template-rows: repeat(6, auto);
    grid-template-columns: repeat(2, auto);
    grid-template-areas: 
      "link link"
      "title title"
      "titleInput noteInput"
      "textarea textarea"
      "markers markers"
      
    ;
  } 
  
`