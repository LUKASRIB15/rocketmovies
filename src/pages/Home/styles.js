import styled from "styled-components";

export const HomeLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: max-content max-content auto;
  grid-template-areas: 
    "header"
    "section"
    "content";


    

  section{
    grid-area: section;
    margin-block: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1137px;
    width: 100%;
    margin: 0 auto;
    padding-block: 4rem;
    padding-inline: 2.4rem;

    h1{
      font-size: clamp(2.4rem, 3vw, 3.2rem);
      font-weight: 400;
    }
    
    button{
      width: max-content;
    }
  }
  

`

export const HomeMain = styled.main`
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  overflow-y: auto;
  width: 100%;
  max-width: 1137px;
  margin: 0 auto;
  padding-inline: 2.4rem;
  padding-bottom: 10rem;

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

`