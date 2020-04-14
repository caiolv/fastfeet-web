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
export const Actions = styled.div`
  position: absolute;
  width: 150px;
  left: calc(50% - 75px);
  top: calc(100% - 10px);
  background: #fff;
  border-radius: 4px;
  padding: 10px 10px;
  box-shadow: 0px 0px 2px #00000026;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  flex-direction: column;
  z-index: 1000;

  &::before {
    content: '';
    position: absolute;
    right: calc(50% - 5px);
    top: -5px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #f1f1f1;
    /* box-shadow: 0px -2px 2px #0000001a; */
  }

  button {
    text-align: left;
    display: flex;
    align-items: center;
    svg {
      margin-right: 8px;
    }

    & + button {
      margin-top: 6px;
      padding-top: 6px;
      border-top: 1px solid #eee;
    }
  }
`;
