import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function TableRow({ children }) {
  return <Container>{children}</Container>;
}

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
};
