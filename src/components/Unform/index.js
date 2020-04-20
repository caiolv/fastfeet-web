import React from 'react';
import PropTypes from 'prop-types';
import { MdCheck, MdChevronLeft } from 'react-icons/md';
import { Form } from '@rocketseat/unform';

import Button from '../Button';

import { Container, Content } from './styles';

export default function UnForm({
  title,
  handleBack,
  initialData,
  onSubmit,
  children,
}) {
  return (
    <Form initialData={initialData} onSubmit={onSubmit}>
      <Container>
        <header>
          <strong>{title}</strong>

          <div>
            <Button
              text="VOLTAR"
              secondary
              icon={<MdChevronLeft size={25} color="#FFF" />}
              onClick={handleBack}
            />
            <Button
              type="submit"
              text="SALVAR"
              icon={<MdCheck size={25} color="#FFF" />}
            />
          </div>
        </header>

        <Content>{children}</Content>
      </Container>
    </Form>
  );
}

UnForm.propTypes = {
  title: PropTypes.string,
  handleBack: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  initialData: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

UnForm.defaultProps = {
  title: 'Título da página',
};
