import styled from 'styled-components';

export const TableRow = styled.tr`
  border: 0;
  background: #fff;

  td {
    padding: 12px 20px;
    border-radius: 4px;
    position: relative;

    span {
      text-align: left;
      font-size: 16px;
      color: #666666;
    }

    div {
      display: flex;
      align-items: center;

      img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin-right: 5px;
      }
    }

    button {
      width: 100%;
      outline: 0;
      border: 0;
    }

    &:nth-child(7) {
      width: 10px;
    }
  }
`;
