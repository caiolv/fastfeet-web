import React from 'react';
import FormHeader from '~/components/FormHeader';

import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';

export default function Form() {
  return (
    <Container>
      <FormHeader
        title="Cadastro de encomendas"
        handleBack={() => history.push('/deliveries')}
      />
    </Container>
  );
}
