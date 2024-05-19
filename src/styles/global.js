import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;
  }

  body{
    background-color: ${props=>props.theme.colors['gray-900']};
    color: ${props=>props.theme.colors['gray-50']}
  }

  body, input, textarea, button{
    font-size: 1.6rem;
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
  }
  
  a{
    text-decoration: none;
    font-size: 1.6rem;
    color: ${props=>props.theme.colors.red};
  }
`