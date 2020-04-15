import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function TableData({ children }) {
  return <Container>{children}</Container>;
}

TableData.propTypes = {
  children: PropTypes.node.isRequired,
};
