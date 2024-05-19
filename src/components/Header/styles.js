import styled from "styled-components";

export const HeaderLayout = styled.header`
  grid-area: header;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  padding: 2.4rem;
  border-bottom: 1px solid ${props=>props.theme.colors['gray-600']};

  & > h2{
    font-size: 2.4rem;
    color: ${props=>props.theme.colors.red};
  }

  @media(min-width: 839px){
    gap: 6.4rem;
    justify-content: center;
  }

  @media(min-width: 737px){
    flex-direction: row;
  }
`

export const Profile = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  & > div{
    display: flex;
    flex-direction: column;
    align-items: end;

    h3{
      font-size: 1.4rem;
      width: max-content;
    }

    button{
      background-color: transparent;
      border: 0;
      color: ${props=>props.theme.colors['gray-300']};
    } 
  }

  & > img{
    height: 6.4rem;
    width: 6.4rem;
    border-radius: 50%;
    border: 1px solid ${props=>props.theme.colors['gray-600']};
  }
`