import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  span {
    color: red;
  }
`;

interface LabelProps {
  isFocused: boolean;
}

export const Label = styled.label<LabelProps>`
  display: flex;

  width: 100%;
  height: 50px;

  padding: 10px;

  border: 2px solid #7a7a7a;
  border-radius: 3px;

  background-color: #dedede;

  input {
    width: 100%;
    border: 0;
    color: #7a7a7a;
    background-color: #dedede;

    ::placeholder {
      color: #aaa;
      font-weight: 500px;
    }
  }
`;
