import styled from "styled-components";

export const MovieNoteLayout = styled.button`
  background-color: ${props=>props.theme.colors.pink};
  padding: 3.2rem;
  border-radius: 16px;
  border: 0;
  color: ${props=>props.theme.colors['gray-50']};
  text-align: left;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  cursor: pointer;

  & > p{
    margin-top: 1.6rem;
    color: ${props=>props.theme.colors['gray-300']};
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }

  & > footer{
    margin-top: 1.6rem;
    display: flex;
    gap: 0.8rem;
    flex-wrap: wrap;
  }
`