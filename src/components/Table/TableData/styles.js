import styled from 'styled-components';

export const Container = styled.td`
  padding: 12px 20px;
  position: relative;

  span {
    text-align: left;
    font-size: 16px;
    color: #666666;
  }

  &:first-of-type {
    border-radius: 4px 0 0 4px;
  }

  &:last-of-type {
    width: 10px;
    border-radius: 0 4px 4px 0;
  }
`;
