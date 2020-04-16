import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

import PageHeader from '~/components/PageHeader';
import SearchInput from '~/components/SearchInput';
import Button from '~/components/Button';
import Table from '~/components/Table';
import Pagination from '~/components/Pagination';

import RecipientItem from './RecipientItem';

import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';

export default function Recipients() {
  const [recipients, setRecipients] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  async function loadRecipients() {
    const response = await api.get('/recipients', {
      params: {
        page,
        search,
      },
    });
    setRecipients(response.data);
  }

  useEffect(() => {
    loadRecipients();
  }, [page, search]);// eslint-disable-line

  async function handlePage(action) {
    setPage(action === 'back' ? page - 1 : page + 1);
  }

  function handleSearch(value) {
    setSearch(value);
  }

  async function handleDelete(id) {
    const confirm = window.confirm('Deseja mesmo apagar o destinatário?');// eslint-disable-line
    try {
      if (confirm) {
        await api.delete(`/recipients/${id}`);

        toast.success('Destinatário removido com sucesso!');

        loadRecipients();
      }
    } catch (e) {
      toast.error('Houve um erro ao apagar o destinatário.');
    }
  }

  return (
    <Container>
      <PageHeader title="Gerenciar destinatários">
        <SearchInput
          placeholder="Buscar por destinatários"
          handleSearch={handleSearch}
        />
        <Button
          text="CADASTRAR"
          icon={<MdAdd size={25} color="#FFF" />}
          onClick={() => history.push('/recipients/new')}
        />
      </PageHeader>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {recipients.map((recipient) => (
            <RecipientItem
              key={recipient.id}
              recipient={recipient}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </Table>
      <Pagination page={page} handlePage={handlePage} />
    </Container>
  );
}
