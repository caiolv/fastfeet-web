import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;

  section {
    display: flex;

    div + div {
      margin-left: 30px;
    }
  }
`;
