import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

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

  function formatDates(data) {
    return data.map((delivery) => ({
      ...delivery,
      startDateFormatted: delivery.start_date
        ? format(parseISO(delivery.start_date), 'dd/MM/yyyy', { locale: pt })
        : null,
      endDateFormatted: delivery.end_date
        ? format(parseISO(delivery.end_date), 'dd/MM/yyyy', { locale: pt })
        : null,
    }));
  }

  async function loadDeliveries() {
    const response = await api.get('/deliveries', {
      params: {
        page,
        search,
      },
    });

    const data = formatDates(response.data);

    setDeliveries(data);
  }

  useEffect(() => {
    loadDeliveries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search]);

  async function handlePage(action) {
    setPage(action === 'back' ? page - 1 : page + 1);
  }

  function handleSearch(value) {
    setSearch(value);
  }

  async function handleDelete(id) {
    const confirm = window.confirm('Deseja mesmo cancelar a entrega?');// eslint-disable-line
    try {
      if (confirm) {// eslint-disable-line
        await api.delete(`/deliveries/${id}`);

        toast.success('Entregada cancelada com sucesso!');

        loadDeliveries();
      }
    } catch (e) {
      toast.error('Houve um erro ao cancelar a entrega.');
    }
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
            <DeliveryItem
              key={delivery.id}
              delivery={delivery}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </Table>
      <Pagination page={page} handlePage={handlePage} />
    </Container>
  );
}
