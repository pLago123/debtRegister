import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  span {
    color: red;
  }
`;

export const Label = styled.label`
  select {
    display: flex;

    width: 100%;
    height: 50px;

    padding: 10px;

    border: 2px solid #7a7a7a;
    border-radius: 3px;

    color: #7a7a7a;
    background-color: #dedede;

    cursor: pointer;

    ::placeholder {
      color: #aaa;
      font-weight: 500px;
    }
  }
`;
