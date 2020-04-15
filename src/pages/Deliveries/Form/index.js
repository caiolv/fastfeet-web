import React from 'react';
import FormHeader from '~/components/FormHeader';
import Unform from '~/components/Unform';
import Input from '~/components/Input';

import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';

export default function Form() {
  return (
    <Container>
      <FormHeader
        title="Cadastro de encomendas"
        handleBack={() => history.goBack()}
      />

      <Unform>
        <section>
          <Input
            label="Destinatário"
            name="product"
            placeholder="Ludwig van Beethoven"
          />
          <Input label="Entregador" name="product" placeholder="John Doe" />
        </section>
        <Input
          label="Nome do produto"
          name="product"
          placeholder="Yamaha SX7"
        />
      </Unform>
    </Container>
  );
}
