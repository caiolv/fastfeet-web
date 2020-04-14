import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdMoreHoriz, MdDeleteForever, MdCreate } from 'react-icons/md';

import Actions from '~/components/Actions';

import { TableRow } from './styles';

export default function DeliveryItem({ delivery }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    console.tron.log(visible);
    setVisible(!visible);
  }

  return (
    <TableRow>
      <td>
        <span>#{delivery.id < 10 ? `0${delivery.id}` : delivery.id}</span>
      </td>
      <td>
        <span>{delivery.recipient.name}</span>
      </td>
      <td>
        <div>
          {delivery.courier.avatar && (
            <img
              src={delivery.courier.avatar.url}
              alt={delivery.courier.name}
            />
          )}
          <span>{delivery.courier.name}</span>
        </div>
      </td>
      <td>
        <span>{delivery.recipient.city}</span>
      </td>
      <td>
        <span>{delivery.recipient.state}</span>
      </td>
      <td>
        <span>{delivery.status}</span>
      </td>
      <td>
        <button type="button" onClick={handleToggleVisible}>
          <MdMoreHoriz size={20} color="#C6C6C6" />
        </button>

        <Actions visible={visible}>
          <button type="button">
            <MdCreate size={15} color="#4D85EE" />
            <span>Editar</span>
          </button>
          <button type="button">
            <MdDeleteForever size={15} color="#DE3B3B" />
            <span>Excluir</span>
          </button>
        </Actions>
      </td>
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
