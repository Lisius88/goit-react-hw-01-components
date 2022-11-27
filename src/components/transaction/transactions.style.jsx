import styled from '@emotion/styled';

export const TransactioHistory = styled.table`
  margin: 0;
  padding: 0;
  border: 3px solid white;
  background-color: white;
  width: 600px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 50px;

  box-shadow: 6px 6px 3px 0px rgba(12, 12, 49, 0.14),
    0px 1px 1px 0px rgba(12, 12, 49, 0.14),
    0px 2px 1px -1px rgba(12, 12, 49, 0.14);
`;

export const Element = styled.tr`
  margin-left: auto;
  margin-right: auto;
`;

export const Titles = styled.th`
  padding: 10px;
`;

export const Content = styled.td`
  text-align: center;
  border: 1px solid teal;
  border-radius: 5px;
  padding: 10px;
  margin: 0;
`;
