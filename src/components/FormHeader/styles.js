import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  margin-top: 34px;
  margin-bottom: 22px;
  display: flex;
  justify-content: space-between;

  strong {
    color: #444444;
    font-size: 24px;
  }

  div {
    display: flex;

    button + button {
      margin-left: 16px;
    }
  }
`;
