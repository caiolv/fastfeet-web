import styled from 'styled-components';

export const Container = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  background: #7d40e7;
  border: 0;
  outline: 0;
  padding: 5px 15px;
  border-radius: 4px;
  align-items: center;

  svg {
    margin-right: 5px;
  }

  span {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
