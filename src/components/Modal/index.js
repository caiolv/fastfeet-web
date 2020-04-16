import React from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';

import { ModalContainer } from './styles';

const customStyles = {
  content: {
    background: 'rgba(0, 0, 0, 0.7)',
  },
};

export default function Modal({ isOpen, toggleModal, children }) {
  return (
    <ModalContainer
      isOpen={isOpen}
      onRequestClose={toggleModal}
      style={customStyles}
    >
      <button type="button" onClick={toggleModal}>
        <MdClose size={20} color="#999" />
      </button>
      {children}
    </ModalContainer>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
