import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import UnForm from '~/components/UnForm';
import Input from '~/components/Input';
import AvatarInput from '~/components/AvatarInput';

import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';

export default function Form() {
  const { id } = useParams();
  const [courier, setCourier] = useState({});

  useEffect(() => {
    async function loadCourier() {
      const response = await api.get(`/couriers/${id}`);
      setCourier(response.data);
    }

    if (id) loadCourier();
  }, [id]);

  async function handleSubmit(data) {
    console.tron.log(data);
    try {
      if (id)
        await api.put(`/couriers/${id}`, {
          ...data,
        });
      else
        await api.post(`/couriers`, {
          ...data,
        });

      history.push('/couriers');
    } catch (e) {
      const errorMessage = 'Verifique os dados.';

      toast.error(
        id
          ? `Erro ao atualizar entregador. ${errorMessage}`
          : `Erro ao cadastrar entregador. ${errorMessage}`
      );
    }
  }

  return (
    <Container>
      <UnForm
        title={id ? 'Edição de entregadores' : 'Cadastro de entregadores'}
        handleBack={() => history.goBack()}
        initialData={courier}
        onSubmit={handleSubmit}
      >
        <AvatarInput name="avatar_id" />
        <Input label="Nome" name="name" placeholder="John Doe" />
        <Input label="Email" name="email" placeholder="johedoe@example.com" />
      </UnForm>
    </Container>
  );
}
