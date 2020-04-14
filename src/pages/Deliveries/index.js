import React, { useState, useEffect } from 'react';

import { MdAdd, MdSearch } from 'react-icons/md';

import DeliveryItem from './DeliveryItem';

import api from '~/services/api';

import { Container, DeliveriesTable } from './styles';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);
  const [page, setPage] = useState(1);

  async function loadDeliveries() {
    const response = await api.get('/deliveries', {
      params: {},
    });
    console.tron.log(response.data);
    setDeliveries(response.data);
  }

  useEffect(() => {
    loadDeliveries();
  }, [page]);
  return (
    <Container>
      <header>
        <strong>Gerenciando encomendas</strong>

        <div>
          <section>
            <MdSearch size={20} color="#999" />
            <input type="text" placeholder="Buscar por encomendas" />
          </section>

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
          {deliveries.map((delivery) => (
            <DeliveryItem key={delivery.id} delivery={delivery} />
          ))}
        </tbody>
      </DeliveriesTable>
    </Container>
  );
}
