import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;

  @media screen and (max-width: 706px) {
    flex-direction: column;
  }
`;

export const UsersBar = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainContent = styled.div`
  flex: 1;

  padding: 30px;
`;
