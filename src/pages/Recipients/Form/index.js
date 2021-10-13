import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import UnForm from '~/components/Unform';
import Input from '~/components/Input';

import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';

export default function Form() {
  const { id } = useParams();
  const [recipient, setRecipient] = useState({});

  useEffect(() => {
    async function loadRecipient() {
      const response = await api.get(`/recipients/${id}`);
      setRecipient(response.data);
    }

    if (id) loadRecipient();
  }, [id]);

  async function handleSubmit(data) {
    try {
      if (id)
        await api.put(`/recipients/${id}`, {
          ...data,
        });
      else
        await api.post(`/recipients`, {
          ...data,
        });
      toast.success('Cadastro de destinatário realizado com sucesso!');
      history.push('/recipients');
    } catch (e) {
      const errorMessage = 'Verifique os dados.';

      toast.error(
        id
          ? `Erro ao atualizar destinatário. ${errorMessage}`
          : `Erro ao cadastrar destinatário. ${errorMessage}`
      );
    }
  }

  return (
    <Container>
      <UnForm
        title={id ? 'Edição de destinatário' : 'Cadastro de destinatário'}
        handleBack={() => history.goBack()}
        initialData={recipient}
        onSubmit={handleSubmit}
      >
        <Input label="Nome" name="name" placeholder="Ludwig van Beethoven" />
        <section>
          <Input label="Rua" name="street" placeholder="Rua Beethoven" />
          <Input label="Número" name="number" placeholder="1729" width="150" />
          <Input
            label="Complemento"
            name="complement"
            placeholder=""
            width="140"
          />
        </section>
        <section>
          <Input label="Cidade" name="city" placeholder="Diadema" />
          <Input label="Estado" name="state" placeholder="São Paulo" />
          <Input label="CEP" name="cep" placeholder="09960-580" />
        </section>
      </UnForm>
    </Container>
  );
}
