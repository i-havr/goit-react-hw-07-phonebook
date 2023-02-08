import styled from 'styled-components';

export const ContactsListItemStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%
  /* margin-bottom: 5px; */
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid #BCC5CE;
  color: #729599;

  & > svg{
    margin: 0;
    padding: 0;
margin-right: 8px;
  }
  /* &::before {
    content: '';
    width: 10px;
    height: 10px;
    margin-right: 10px;
    border-radius: 50%;
    background-color: #729599;
  } */
`;

export const InnerElementStyled = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  color: black;
  font-size: 14px;
`;
