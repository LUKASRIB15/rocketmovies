import styled from "styled-components";
import BackgroundImg from "../../assets/background.png";

export const SignUpLayout = styled.div`
  display: grid;
  grid-template-columns: 637px 1fr;
  height: 100vh;

  & > aside{
    max-width: 340px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const SignUpHeader = styled.header`
  margin-bottom: 4.8rem;

  & > h1{
    font-size: 4.8rem;
    font-weight: bold;
    color: ${props=>props.theme.colors.red};
    line-height: 1.2;
  }

  & > p{
    font-size: 1.4rem;
    color: ${props=>props.theme.colors['gray-300']};
  }
`

export const SignUpMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  & > h2{
    font-size: 2.4rem;
    font-weight: 500;
  }

  & > form{
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    button{
      margin-top: 1.6rem;
    }
  }

  & > div{
    align-self: center;
    display: flex;
    align-items: center;
    gap: 0.8rem;

    svg{
      color: ${props=>props.theme.colors.red};
    }
  }
`

export const Background = styled.div`
  background: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`