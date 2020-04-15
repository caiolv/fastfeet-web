import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ActionsMenu from '~/components/ActionsMenu';
import TableRow from '~/components/Table/TableRow';
import TableData from '~/components/Table/TableData';

import history from '~/services/history';

import { Status } from './styles';

export default function DeliveryItem({ delivery }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleEdit(id) {
    history.push(`/deliveries/edit/${id}`);
  }

  return (
    <TableRow>
      <TableData>
        <span>#{delivery.id < 10 ? `0${delivery.id}` : delivery.id}</span>
      </TableData>
      <TableData>
        <span>{delivery.recipient.name}</span>
      </TableData>
      <TableData>
        <div>
          {delivery.courier.avatar && (
            <img
              src={delivery.courier.avatar.url}
              alt={delivery.courier.name}
            />
          )}
          <span>{delivery.courier.name}</span>
        </div>
      </TableData>
      <TableData>
        <span>{delivery.recipient.city}</span>
      </TableData>
      <TableData>
        <span>{delivery.recipient.state}</span>
      </TableData>
      <TableData>
        <Status palette={STATUS_COLOR[delivery.status]}>
          {delivery.status}
        </Status>
      </TableData>
      <TableData>
        <ActionsMenu
          visible={visible}
          handleToggleVisible={handleToggleVisible}
          handleEdit={() => handleEdit(delivery.id)}
          handleDelete={() => {}}
        />
        {/* <button type="button" onClick={handleToggleVisible}>
          <MdMoreHoriz size={20} color="#C6C6C6" />
        </button>

        <ActionsMenu visible={visible}>
          <button type="button" onClick={() => handleEdit(delivery.id)}>
            <MdCreate size={15} color="#4D85EE" />
            <span>Editar</span>
          </button>
          <button type="button">
            <MdDeleteForever size={15} color="#DE3B3B" />
            <span>Excluir</span>
          </button>
        </ActionsMenu> */}
      </TableData>
    </TableRow>
  );
}

DeliveryItem.propTypes = {
  delivery: PropTypes.shape({
    id: PropTypes.number.isRequired,
    product: PropTypes.string.isRequired,
    recipient: PropTypes.shape({
      name: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
    }),
    courier: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
    status: PropTypes.string.isRequired,
  }).isRequired,
};

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
