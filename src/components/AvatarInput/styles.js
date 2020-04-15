import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 1px dashed #dddddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      font-size: 16px;
      color: #dddddd;
    }

    &:hover {
      opacity: 0.7;
    }

    img {
      background: #eee;
      border-radius: 50%;
    }

    input {
      display: none;
    }
  }
`;
