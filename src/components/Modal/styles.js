import styled from 'styled-components';
import Modal from 'react-modal';

export const ModalContainer = styled(Modal)`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    border: 0;
    outline: 0;
    background: transparent;
    margin-bottom: 20px;
  }

  section {
    background: #fff;
    width: 450px;
    color: #666;
    padding: 25px;
    line-height: 25px;
    border-radius: 4px;

    strong {
      font-size: 14px;
      color: #444;
      margin-bottom: 5px;
    }

    p {
      font-size: 16px;

      strong {
        color: #666;
        font-size: 16px;
        margin-bottom: 0px;
      }
    }

    hr {
      border: 0.5px solid #eee;
      margin: 10px 0;
    }
  }
`;
