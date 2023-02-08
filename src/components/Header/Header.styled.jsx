import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  padding: 16px 0px;
  background-color: #729599;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const HeaderContentStyled = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 64px;
`;

export const HeaderLogoStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 0 64px 0 0;
  font-size: 20px;

  & > svg {
    margin: 0px;
    margin-right: 4px;
  }
`;
