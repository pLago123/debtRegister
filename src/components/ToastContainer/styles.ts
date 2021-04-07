import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;

  overflow: hidden;

  @media screen and (max-width: 725px) {
    top: 100%;
  }
`;
