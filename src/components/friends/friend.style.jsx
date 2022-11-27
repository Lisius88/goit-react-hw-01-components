import styled from '@emotion/styled';

export const Div = styled.div`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 10px;
  gap: 10px;
  margin-bottom: 10px;
  background-color: white;
`;

export const Status = styled.span`
  display: block;
  fill: pink;
  color: pink;

  color: ${props => {
    if (props.isOnline === true) {
      return 'green';
    }
    if (props.isOnline === false) {
      return 'red';
    }
  }};
`;

export const Avatar = styled.img``;

export const Name = styled.p``;
