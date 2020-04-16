import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextTruncate from 'react-text-truncate';

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
        <TextTruncate
          line={1}
          element="span"
          truncateText="…"
          text={description}
        />
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
  problem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    delivery: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
