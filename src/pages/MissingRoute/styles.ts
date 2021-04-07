import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  display: flex;

  height: 100vh;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h1 {
    font-size: 100px;
    font-family: 'Roboto Slab', serif;
  }

  img {
    max-width: 600px;
    width: 100%;
  }
`;
