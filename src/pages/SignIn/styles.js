import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 360px;
  text-align: center;
  background: #fff;
  padding: 60px 30px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px #00000033;

  img {
    height: 44px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    strong {
      font-size: 14px;
      font-weight: bold;
      text-transform: uppercase;
      text-align: left;
      line-height: 19px;
      color: #444444;
      margin-bottom: 7px;
    }

    input {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #333;
      font-size: 16px;
      margin: 0 0 10px;

      &::placeholder {
        color: #999;
      }
    }

    span {
      color: #f64c75;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #7d48e3;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 14px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7d48e3')};
      }
    }
  }
`;
