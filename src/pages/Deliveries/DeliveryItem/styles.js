import styled from 'styled-components';
import Modal from 'react-modal';

export const CourierContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    margin-left: 5px;
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
