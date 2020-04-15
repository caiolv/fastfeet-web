import React from 'react';
import PropTypes from 'prop-types';
import { MdCheck, MdChevronLeft } from 'react-icons/md';

import Button from '../Button';

import { Container } from './styles';

export default function FormHeader({ title, handleBack, handleSubmit }) {
  return (
    <Container>
      <strong>{title}</strong>

      <div>
        <Button
          text="VOLTAR"
          secondary
          icon={<MdChevronLeft size={25} color="#FFF" />}
          onClick={handleBack}
        />
        <Button
          text="SALVAR"
          icon={<MdCheck size={25} color="#FFF" />}
          onClick={handleSubmit}
        />
      </div>
    </Container>
  );
}

FormHeader.propTypes = {
  title: PropTypes.string,
  handleBack: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

FormHeader.defaultProps = {
  title: 'Título da página',
};
