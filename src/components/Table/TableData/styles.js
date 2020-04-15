import styled from 'styled-components';

export const Container = styled.td`
  padding: 12px 20px;
  position: relative;

  span {
    text-align: left;
    font-size: 16px;
    color: #666666;
  }

  & + div {
    display: flex;
    align-items: center;

    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin-right: 5px;
    }
  }

  & > button {
    width: 100%;
    outline: 0;
    border: 0;
    background: transparent;
  }

  &:first-of-type {
    border-radius: 4px 0 0 4px;
  }

  &:last-of-type {
    width: 10px;
    border-radius: 0 4px 4px 0;
  }
`;
