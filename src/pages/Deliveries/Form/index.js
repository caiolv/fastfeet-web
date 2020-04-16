import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import UnForm from '~/components/UnForm';
import Input from '~/components/Input';
import SelectInput from './SelectInput';

import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';

export default function Form() {
  const { id } = useParams();
  const [delivery, setDelivery] = useState({});
  const [couriers, setCouriers] = useState({});
  const [recipients, setRecipients] = useState({});

  useEffect(() => {
    async function loadDelivery() {
      const response = await api.get(`/deliveries/${id}`);
      setDelivery(response.data);
    }

    async function loadSelectData() {
      const response = await Promise.all([
        api.get('/couriers'),
        api.get('/recipients'),
      ]);

      const [couriersData, recipientsData] = response.map((resp) => {
        return resp.data.map((responseData) => ({
          value: responseData.id,
          label: responseData.name,
        }));
      });

      setCouriers(couriersData);
      setRecipients(recipientsData);
    }

    if (id) loadDelivery();
    loadSelectData();
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
          <SelectInput
            name="recipient_id"
            objectName="recipient"
            label="Destinatário"
            placeholder="Ludwig van Beethoven"
            data={recipients}
          />
          <SelectInput
            name="courier_id"
            objectName="courier"
            label="Entregador"
            placeholder="John Doe"
            data={couriers}
          />
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
