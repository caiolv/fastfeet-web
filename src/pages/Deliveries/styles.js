import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  header {
    margin-top: 34px;
    margin-bottom: 22px;

    strong {
      color: #444444;
      font-size: 24px;
    }

    div {
      margin-top: 34px;
      display: flex;
      justify-content: space-between;

      input {
        width: 237px;
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 5px 15px;
      }

      button {
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
      }
    }
  }
`;

export const DeliveriesTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 20px;

  thead {
    th {
      padding: 0 20px;
      color: #444;
      font-size: 16px;
      text-align: left;
    }
  }
`;
