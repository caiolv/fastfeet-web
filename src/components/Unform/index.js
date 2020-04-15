import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Unform({ children }) {
  return <Container>{children}</Container>;
}

Unform.propTypes = {
  children: PropTypes.node.isRequired,
};
