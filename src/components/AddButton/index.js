import React from 'react';
import { MdAdd } from 'react-icons/md';

import { Container } from './styles';

export default function AddButton() {
  return (
    <Container>
      <MdAdd size={25} color="#FFF" />
      <span>Cadastrar</span>
    </Container>
  );
}
