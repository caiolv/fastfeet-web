import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ActionsMenu from '~/components/ActionsMenu';
import TableRow from '~/components/Table/TableRow';
import TableData from '~/components/Table/TableData';

import history from '~/services/history';

export default function RecipientItem({ recipient, handleDelete }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleEdit(id) {
    history.push(`/recipients/edit/${id}`);
  }

  const { id, name, street, number, city, state } = recipient;

  return (
    <TableRow>
      <TableData>
        <span>#{id < 10 ? `0${id}` : id}</span>
      </TableData>
      <TableData>
        <span>{name}</span>
      </TableData>
      <TableData>
        <span>{`${street}, ${number}, ${city} - ${state}`}</span>
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

RecipientItem.propTypes = {
  recipient: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
