import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ActionsMenu from '~/components/ActionsMenu';
import TableRow from '~/components/Table/TableRow';
import TableData from '~/components/Table/TableData';
import Modal from '~/components/Modal';

export default function ProblemItem({ problem, handleDelete }) {
  const [visible, setVisible] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function toggleModal() {
    setIsOpen(!modalIsOpen);
    setVisible(!visible);
  }

  const { delivery, description } = problem;

  return (
    <TableRow>
      <TableData>
        <span>#{delivery.id < 10 ? `0${delivery.id}` : delivery.id}</span>
      </TableData>
      <TableData>
        <span>{description}</span>
      </TableData>
      <TableData>
        <ActionsMenu
          visible={visible}
          handleShow={() => toggleModal()}
          handleToggleVisible={handleToggleVisible}
          handleDelete={() => handleDelete(delivery.id)}
        />
        <Modal isOpen={modalIsOpen} toggleModal={toggleModal}>
          <section>
            <strong>VISUALIZAR PROBLEMA</strong>
            <p>{problem.description}</p>
          </section>
        </Modal>
      </TableData>
    </TableRow>
  );
}

ProblemItem.propTypes = {
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
