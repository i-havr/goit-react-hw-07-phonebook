import styled from 'styled-components';

export const MainStyled = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: start; */
  min-width: 80%;
  max-width: 1600px;
  min-height: 100;
  /* height: auto; */
  margin-top: 64px;
  margin-bottom: 64px;
  /* padding-bottom: 32px; */

  & div[data-testid] {
    margin-top: 0px;
    margin-bottom: -64px;
  }
`;
