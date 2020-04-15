import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  background: ${(props) => (props.secondary ? '#CCCCCC' : '#7d40e7')};
  border: 0;
  outline: 0;
  padding: 5px 15px;
  border-radius: 4px;
  align-items: center;

  svg {
    margin-right: 2px;
  }

  span {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
