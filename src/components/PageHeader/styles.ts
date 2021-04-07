import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  h1 {
    font-family: 'Roboto Slab', serif;
  }

  h4 {
    color: gray;
    margin-bottom: 25px;
  }

  div {
    width: 100%;

    a {
      display: flex;
      flex-direction: row;
      align-items: center;

      width: 200px;

      padding: 10px 5px;
      border-radius: 50px;

      background-color: rgba(227, 184, 116, 0.15);

      color: #333;
      text-decoration: none;

      :hover {
        background-color: rgba(227, 184, 116, 0.3);
      }
    }
  }
`;

export const HeaderImage = styled.div`
  display: flex;

  img {
    width: 100%;
    max-width: 400px;
    margin-left: auto;
  }
`;
