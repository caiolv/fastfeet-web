import { Form } from '@rocketseat/unform';
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

export const Unform = styled(Form)`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
`;
