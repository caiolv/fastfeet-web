import React, { useState, useEffect } from 'react';

import PageHeader from '~/components/PageHeader';
import SearchInput from '~/components/SearchInput';
import AddButton from '~/components/AddButton';
import Table from '~/components/Table';

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
      <PageHeader title="Gerenciar encomendas">
        <SearchInput placeholder="Buscar por encomendas" />
        <AddButton />
      </PageHeader>
      <Table>
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
      </Table>
    </Container>
  );
}
