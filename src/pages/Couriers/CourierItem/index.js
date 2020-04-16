import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ActionsMenu from '~/components/ActionsMenu';
import TableRow from '~/components/Table/TableRow';
import TableData from '~/components/Table/TableData';
import CourierAvatar from '~/components/CourierAvatar';

import history from '~/services/history';

export default function CourierItem({ courier, handleDelete }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleEdit(id) {
    history.push(`/couriers/edit/${id}`);
  }

  const { id, name, email } = courier;

  return (
    <TableRow>
      <TableData>
        <span>#{id < 10 ? `0${id}` : id}</span>
      </TableData>
      <TableData>
        <CourierAvatar courier={courier} />
      </TableData>
      <TableData>
        <span>{name}</span>
      </TableData>
      <TableData>
        <span>{email}</span>
      </TableData>
      <TableData>
        <ActionsMenu
          visible={visible}
          handleToggleVisible={handleToggleVisible}
          handleEdit={() => handleEdit(id)}
          handleDelete={() => handleDelete(id)}
        />
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
  handleDelete: PropTypes.func.isRequired,
};
