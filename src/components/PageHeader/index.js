import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function PageHeader({ title, children }) {
  return (
    <Container>
      <strong>{title}</strong>
      <div>{children}</div>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

PageHeader.defaultProps = {
  title: 'Título da página',
};
