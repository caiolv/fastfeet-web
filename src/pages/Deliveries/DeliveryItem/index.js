import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ActionsMenu from '~/components/ActionsMenu';
import TableRow from '~/components/Table/TableRow';
import TableData from '~/components/Table/TableData';
import CourierAvatar from '~/components/CourierAvatar';
import Modal from '~/components/Modal';

import history from '~/services/history';

import { Status, CourierContainer } from './styles';

const STATUS_COLOR = {
  PENDENTE: {
    color: '#C1BC35',
    background: '#F0F0DF',
  },
  RETIRADA: {
    color: '#4D85EE',
    background: '#BAD2FF',
  },
  ENTREGUE: {
    color: '#2CA42B',
    background: '#DFF0DF',
  },
  CANCELADA: {
    color: '#DE3B3B',
    background: '#FAB0B0',
  },
};

export default function DeliveryItem({ delivery, handleDelete }) {
  const [visible, setVisible] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleEdit(id) {
    history.push(`/deliveries/edit/${id}`);
  }

  function toggleModal() {
    setIsOpen(!modalIsOpen);
    setVisible(!visible);
  }

  const { id, recipient, courier, status } = delivery;

  return (
    <TableRow>
      <TableData>
        <span>#{id < 10 ? `0${id}` : id}</span>
      </TableData>
      <TableData>
        <span>{recipient.name}</span>
      </TableData>
      <TableData>
        <CourierContainer>
          <CourierAvatar courier={courier} />
          <span>{courier.name}</span>
        </CourierContainer>
      </TableData>
      <TableData>
        <span>{recipient.city.toString()}</span>
      </TableData>
      <TableData>
        <span>{recipient.state}</span>
      </TableData>
      <TableData>
        <Status palette={STATUS_COLOR[status]}>{status}</Status>
      </TableData>
      <TableData>
        <ActionsMenu
          visible={visible}
          handleToggleVisible={handleToggleVisible}
          handleEdit={() => handleEdit(id)}
          handleDelete={() => handleDelete(id)}
          handleShow={() => toggleModal()}
        />
        <Modal isOpen={modalIsOpen} toggleModal={toggleModal}>
          <section>
            <strong>Informações da encomenda</strong>
            <p>{`${recipient.street}, ${recipient.number}`}</p>
            <p>{`${recipient.city} - ${recipient.state}`}</p>
            <p>{recipient.cep}</p>
            <hr />
            <strong>Datas</strong>
            <p>
              <strong>Retirada:</strong> {delivery.startDateFormatted || 'N/A'}
            </p>
            <p>
              <strong>Entrega:</strong> {delivery.endDateFormatted || 'N/A'}
            </p>
            {delivery.end_date && (
              <>
                <hr />
                <strong>Assinatura do destinatário</strong>
              </>
            )}
          </section>
        </Modal>
      </TableData>
    </TableRow>
  );
}

DeliveryItem.propTypes = {
  delivery: PropTypes.shape({
    id: PropTypes.number.isRequired,
    product: PropTypes.string.isRequired,
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,
    recipient: PropTypes.shape({
      name: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      cep: PropTypes.string.isRequired,
    }),
    courier: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
    status: PropTypes.string.isRequired,
    startDateFormatted: PropTypes.string.isRequired,
    endDateFormatted: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
