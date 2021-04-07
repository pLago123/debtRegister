import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.main`
  margin-bottom: 100px;
  padding: 30px;
  border-radius: 10px;
  border: 2px solid #dedede;
`;

export const ListHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1025px) {
    flex-direction: column;
  }
`;

export const ListHeader = styled.h3`
  margin-bottom: 30px;

  span {
    margin-left: 5px;
    padding: 1px 10px;
    border-radius: 15px;

    font-size: 14px;
    color: #7a7a7a;
    background-color: #dedede;
  }
`;

export const ListHeaderControls = styled.div`
  display: flex;
  margin-bottom: 40px;

  div {
    flex: 1;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 15px;
    padding: 10px 15px;
    border-radius: 4px;

    color: white;
    text-decoration: none;

    background-color: #e7b057;

    :hover {
      background-color: ${lighten(0.08, '#e7b057')};
    }
  }

  @media screen and (max-width: 555px) {
    flex-direction: column;

    a {
      margin-left: 0px;
      margin-top: 20px;
    }
  }
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
`;

export const ItemTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  th {
    text-align: left;
  }
`;

export const Item = styled.tr`
  td {
    border-top: 2px solid #dedede;
    padding: 25px 8px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border-radius: 5px;
    border: 0;

    transition-property: background-color;
    transition-duration: 0.2s;

    background-color: #dedede;

    :hover {
      background-color: #c9c9c9;
    }
  }
`;
