import styled from 'styled-components';

export const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  min-width: 80px;
  margin-bottom: 40px;
  border: 1px solid #729599;
  border-radius: 5px;
  padding: 8px 16px 8px 16px;
`;

export const LabelInputStyled = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #252f38;
  & > input {
    border: 1px solid black;
    border-radius: 3px;
    padding: 4px;
  }
`;
