import React from 'react';
import PropTypes from 'prop-types';
import { MdMoreHoriz, MdDeleteForever, MdCreate } from 'react-icons/md';

import { Container, MainButton } from './styles';

export default function Actions({
  visible,
  handleToggleVisible,
  handleEdit,
  handleDelete,
}) {
  return (
    <>
      <MainButton type="button" onClick={handleToggleVisible}>
        <MdMoreHoriz size={20} color="#C6C6C6" />
      </MainButton>

      <Container visible={visible}>
        <button type="button" onClick={handleEdit}>
          <MdCreate size={15} color="#4D85EE" />
          <span>Editar</span>
        </button>
        <button type="button" onClick={handleDelete}>
          <MdDeleteForever size={15} color="#DE3B3B" />
          <span>Excluir</span>
        </button>
      </Container>
    </>
  );
}

Actions.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleToggleVisible: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
