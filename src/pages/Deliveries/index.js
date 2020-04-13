import React from 'react';

import { MdAdd } from 'react-icons/md';

import DeliveryItem from './DeliveryItem';

import api from '~/services/api';

import { Container, DeliveriesTable } from './styles';

export default function Deliveries() {
  return (
    <Container>
      <header>
        <strong>Gerenciando encomendas</strong>

        <div>
          <input type="text" placeholder="Buscar por encomendas" />

          <button type="button">
            <MdAdd size={25} color="#FFF" />
            <span>Cadastrar</span>
          </button>
        </div>
      </header>
      <DeliveriesTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          <DeliveryItem />
          <DeliveryItem />
          <DeliveryItem />
        </tbody>
      </DeliveriesTable>
    </Container>
  );
}
