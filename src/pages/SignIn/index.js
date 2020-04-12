import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/logo.svg';

import { Container } from './styles';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Container>
      <img src={logo} alt="FastFeet" />

      <Form onSubmit={handleSubmit}>
        <strong>Seu e-mail</strong>
        <Input name="email" type="email" placeholder="email@example.com" />
        <strong>Sua senha</strong>
        <Input name="password" type="password" placeholder="*************" />

        <button type="submit">Entrar no sistema</button>
      </Form>
    </Container>
  );
}
