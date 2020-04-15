import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';

import PageHeader from '~/components/PageHeader';
import SearchInput from '~/components/SearchInput';
import Button from '~/components/Button';
import Table from '~/components/Table';
import Pagination from '~/components/Pagination';

import CourierItem from './CourierItem';

import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';

export default function Couriers() {
  const [couriers, setCouriers] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function loadCouriers() {
      const response = await api.get('/couriers', {
        params: {
          page,
          search,
        },
      });
      setCouriers(response.data);
    }

    loadCouriers();
  }, [page, search]);

  async function handlePage(action) {
    setCouriers([]);
    setPage(action === 'back' ? page - 1 : page + 1);
  }

  function handleSearch(value) {
    setSearch(value);
  }

  return (
    <Container>
      <PageHeader title="Gerenciar entregadores">
        <SearchInput
          placeholder="Buscar por entregadores"
          handleSearch={handleSearch}
        />
        <Button
          text="CADASTRAR"
          icon={<MdAdd size={25} color="#FFF" />}
          onClick={() => history.push('/couriers/new')}
        />
      </PageHeader>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {couriers.map((courier) => (
            <CourierItem key={courier.id} courier={courier} />
          ))}
        </tbody>
      </Table>
      <Pagination page={page} handlePage={handlePage} />
    </Container>
  );
}
