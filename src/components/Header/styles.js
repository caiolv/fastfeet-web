import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #ddd;
    }

    a {
      font-size: 15px;
      font-weight: bold;
      color: #444;
      text-transform: uppercase;
    }
  }

  aside {
    /* display: flex; */
    align-items: center;
  }
`;

export const Profile = styled.div`
  margin-left: 20px;
  padding-left: 20px;

  div {
    display: flex;
    margin-right: 10px;
    flex-direction: column;
    align-items: flex-end;

    strong {
      font-size: 14px;
      color: #666;
      margin-bottom: 5px;
    }

    button {
      background: none;
      border: 0;
      color: #de3b3b;
      font-size: 14px;

      &:hover {
        color: ${lighten(0.08, '#de3b3b')};
      }
    }
  }
`;
