import styled from "styled-components";

export const ProfileLayout = styled.div`
  height: 100vh;

  & > header{
    background-color: ${props=>props.theme.colors.pink};
    padding: 6.4rem 2rem;

    div{
      display: flex;
      align-items: center;
      gap: 0.8rem;

      svg{
        color: ${props=>props.theme.colors.red};
      }
    }

    @media(min-width: 637px){
      padding: 6.4rem 14.4rem;
    } 

  }


`

export const PickAvatar = styled.div`
  background-color: ${props=>props.theme.colors.red};
  width: max-content;
  padding: 1.4rem 1.6rem;
  cursor: pointer;
  border-radius: 999px;
  color: ${props=>props.theme.colors['gray-700']};

  position: absolute;
  bottom: 7px;
  right: 7px;

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

`

export const ProfileForm = styled.form`
  max-width: 340px;
  margin: -84px auto 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  padding: 0 1.6rem;

  img{
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }


  & > div:first-child > input{
    display: none;
  }

  & > div:first-child{
    margin-bottom: 6.4rem;
    position: relative;
  }

  & > div:nth-child(4){
    margin-top: 1.6rem;
  }

  & > button{
    margin-top: 1.6rem;
  }
`