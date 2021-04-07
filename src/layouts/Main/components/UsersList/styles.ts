import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const TopMenu = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;

  height: 50px;

  button {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 0;

    background-color: rgba(227, 184, 116, 0.3);
    color: #e7b057;
    font-weight: 700;

    svg {
      margin-left: 15px;
    }
  }

  @media screen and (max-width: 706px) {
    display: flex;
  }
`;

interface UserListWrapperProps {
  isOpen: string;
}

export const UserListWrapper = styled.div<UserListWrapperProps>`
  display: flex;
  flex-direction: column;
  padding: 25px 20px;
  min-width: 245px;

  @media screen and (max-width: 706px) {
    overflow: hidden;
    ${props =>
      props.isOpen === 'true'
        ? css`
            height: auto;
          `
        : css`
            height: 0px;
            padding: 0;
          `};
  }
`;

interface UserButtonProps {
  active: boolean;
}

export const UserButton = styled.button<UserButtonProps>`
  display: flex;
  justify-content: center;

  border: 0;
  border-radius: 4px;
  padding: 5px;
  background-color: transparent;
  font-weight: 500;

  &:hover {
    background-color: #e8e8e8;
  }

  ${props =>
    props.active &&
    css`
      background-color: rgba(227, 184, 116, 0.15);
      color: #e7b057;
      font-weight: 700;

      &:hover {
        background-color: rgba(227, 184, 116, 0.3);
      }
    `}

  & + button {
    margin-top: 10px;
  }
`;
