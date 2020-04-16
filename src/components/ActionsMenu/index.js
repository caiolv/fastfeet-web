import React from 'react';
import PropTypes from 'prop-types';
import {
  MdMoreHoriz,
  MdDeleteForever,
  MdCreate,
  MdVisibility,
} from 'react-icons/md';

import { Container, MainButton } from './styles';

export default function Actions({
  visible,
  handleToggleVisible,
  handleEdit,
  handleDelete,
  handleShow,
  deleteLabel,
}) {
  return (
    <>
      <MainButton type="button" onClick={handleToggleVisible}>
        <MdMoreHoriz size={20} color="#C6C6C6" />
      </MainButton>

      <Container visible={visible}>
        {handleShow && (
          <button type="button" onClick={handleShow}>
            <MdVisibility size={15} color="#8E5BE8" />
            <span>Visualizar</span>
          </button>
        )}
        <button type="button" onClick={handleEdit}>
          <MdCreate size={15} color="#4D85EE" />
          <span>Editar</span>
        </button>
        <button type="button" onClick={handleDelete}>
          <MdDeleteForever size={15} color="#DE3B3B" />
          <span>{deleteLabel}</span>
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
  // eslint-disable-next-line react/require-default-props
  handleShow: PropTypes.func,
  deleteLabel: PropTypes.string,
};

Actions.defaultProps = {
  deleteLabel: 'Excluir',
};
