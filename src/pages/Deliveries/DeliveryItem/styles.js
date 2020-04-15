import styled from 'styled-components';

export const TableRow = styled.tr`
  border: 0;
  background: #fff;

  td {
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
  }
`;

export const Status = styled.strong`
  background: ${(props) => props.palette.background};
  padding: 5px 7px 5px 23px;
  border-radius: 12px;
  font-size: 14px;
  color: ${(props) => props.palette.color};
  position: relative;

  &::before {
    position: absolute;
    left: 7px;
    top: calc(50% - 5px);
    width: 10px;
    height: 10px;
    background: ${(props) => props.palette.color};
    content: '';
    border-radius: 50%;
  }
`;
