import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-bottom: 100px;
  padding: 30px;
  border-radius: 10px;
  border: 2px solid #dedede;
`;

export const FormControlGroup = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 20px;
`;

export const FormTitle = styled.h3`
  margin-bottom: 10px;
`;

interface ButtonsControlGroupProps {
  loading: string;
}

export const ButtonsControlGroup = styled.div<ButtonsControlGroupProps>`
  display: flex;
  justify-content: flex-end;
  ${props =>
    props.loading === 'true' &&
    css`
      & > :first-child {
        display: none;
      }
      & > button + button {
        flex: 1;
        display: flex;
        justify-content: center;
        aling-items: center;
        margin-left: 0;

        transition: all 0.3s;
      }
    `}
  @media screen and (max-width: 725px) {
    margin-top: 50px;
    justify-content: space-between;
  }
`;
