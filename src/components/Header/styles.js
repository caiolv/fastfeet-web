import styled from 'styled-components';

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
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      font-size: 14px;
      display: block;
      color: #666;
      margin-bottom: 5px;
    }

    a {
      display: block;
      color: #de3b3b;
      font-size: 14px;
    }
  }
`;
