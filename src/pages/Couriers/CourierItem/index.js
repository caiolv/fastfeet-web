import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ActionsMenu from '~/components/ActionsMenu';
import TableRow from '~/components/Table/TableRow';
import TableData from '~/components/Table/TableData';
import CourierAvatar from '~/components/CourierAvatar';

import history from '~/services/history';

export default function CourierItem({ courier }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleEdit(id) {
    history.push(`/couriers/edit/${id}`);
  }

  return (
    <TableRow>
      <TableData>
        <span>#{courier.id < 10 ? `0${courier.id}` : courier.id}</span>
      </TableData>
      <TableData>
        <CourierAvatar courier={courier} />
        {/* <div>
          {courier.avatar && (
            <img src={courier.avatar.url} alt={courier.name} />
          )}
        </div> */}
      </TableData>
      <TableData>
        <span>{courier.name}</span>
      </TableData>
      <TableData>
        <span>{courier.email}</span>
      </TableData>
      <TableData>
        <ActionsMenu
          visible={visible}
          handleToggleVisible={handleToggleVisible}
          handleEdit={() => handleEdit(courier.id)}
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

CourierItem.propTypes = {
  courier: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
};
