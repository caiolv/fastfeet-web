import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  header {
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
  }
`;

export const Content = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
`;
