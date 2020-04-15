import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ActionsMenu from '~/components/ActionsMenu';
import TableRow from '~/components/Table/TableRow';
import TableData from '~/components/Table/TableData';
import CourierAvatar from '~/components/CourierAvatar';

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
        <CourierContainer>
          <CourierAvatar courier={delivery.courier} />
          <span>{delivery.courier.name}</span>
        </CourierContainer>
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
