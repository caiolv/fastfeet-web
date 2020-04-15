import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import UnForm from '~/components/UnForm';
import Input from '~/components/Input';

import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';

export default function Form() {
  const { id } = useParams();
  const [delivery, setDelivery] = useState({});

  useEffect(() => {
    async function loadDelivery() {
      const response = await api.get(`/deliveries/${id}`);
      setDelivery(response.data);
    }

    if (id) loadDelivery();
  }, [id]);

  async function handleSubmit(data) {
    try {
      if (id)
        await api.put(`/deliveries/${id}`, {
          ...data,
        });
      else
        await api.post(`/deliveries`, {
          ...data,
        });

      toast.success('Cadastro de encomenda realizado com sucesso!');
      history.push('/deliveries');
    } catch (e) {
      const errorMessage = 'Verifique os dados.';

      toast.error(
        id
          ? `Erro ao atualizar entrega. ${errorMessage}`
          : `Erro ao cadastrar entrega. ${errorMessage}`
      );
    }
  }

  return (
    <Container>
      <UnForm
        title={id ? 'Edição de encomendas' : 'Cadastro de encomendas'}
        handleBack={() => history.goBack()}
        initialData={delivery}
        onSubmit={handleSubmit}
      >
        <section>
          <Input
            label="Destinatário"
            name="recipient"
            placeholder="Ludwig van Beethoven"
          />
          <Input label="Entregador" name="courier" placeholder="John Doe" />
        </section>
        <Input
          label="Nome do produto"
          name="product"
          placeholder="Yamaha SX7"
        />
      </UnForm>
    </Container>
  );
}
