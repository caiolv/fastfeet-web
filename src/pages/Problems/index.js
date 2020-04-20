import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import PageHeader from '~/components/PageHeader';
import SearchInput from '~/components/SearchInput';
import Table from '~/components/Table';
import Pagination from '~/components/Pagination';

import ProblemItem from './ProblemItem';

import api from '~/services/api';

import { Container } from './styles';

export default function Problems() {
  const [problems, setProblems] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  async function loadProblems() {
    const response = await api.get('/problems', {
      params: {
        page,
        search,
      },
    });
    setProblems(response.data);
  }

  useEffect(() => {
    loadProblems();
  }, [page, search]);// eslint-disable-line

  async function handlePage(action) {
    setProblems([]);
    setPage(action === 'back' ? page - 1 : page + 1);
  }

  function handleSearch(value) {
    setSearch(value);
  }

  async function handleDelete(id) {
    const confirm = window.confirm('Deseja mesmo cancelar a encomenda?');// eslint-disable-line
    try {
      if (confirm) {// eslint-disable-line
        await api.delete(`/recipients/${id}`);

        toast.success('Encomenda cancelada com sucesso!');

        loadProblems();
      }
    } catch (e) {
      toast.error('Houve um erro ao cancelar o encomenda.');
    }
  }

  return (
    <Container>
      <PageHeader title="Gerenciar problemas">
        <SearchInput
          placeholder="Buscar por problemas"
          handleSearch={handleSearch}
        />
      </PageHeader>
      <Table>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {problems.map((problem) => (
            <ProblemItem
              key={problem.id}
              problem={problem}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </Table>
      <Pagination page={page} handlePage={handlePage} />
    </Container>
  );
}
