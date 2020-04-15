import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';

import PageHeader from '~/components/PageHeader';
import SearchInput from '~/components/SearchInput';
import Button from '~/components/Button';
import Table from '~/components/Table';
import Pagination from '~/components/Pagination';

import DeliveryItem from './DeliveryItem';

import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('/deliveries', {
        params: {
          page,
          search,
        },
      });
      setDeliveries(response.data);
    }

    loadDeliveries();
  }, [page, search]);

  async function handlePage(action) {
    setPage(action === 'back' ? page - 1 : page + 1);
  }

  function handleSearch(value) {
    setSearch(value);
  }

  return (
    <Container>
      <PageHeader title="Gerenciar encomendas">
        <SearchInput
          placeholder="Buscar por encomendas"
          handleSearch={handleSearch}
        />
        <Button
          text="CADASTRAR"
          icon={<MdAdd size={25} color="#FFF" />}
          onClick={() => history.push('/deliveries/new')}
        />
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
      <Pagination page={page} handlePage={handlePage} />
    </Container>
  );
}
