import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Actions({ children, visible }) {
  return <Container visible={visible}>{children}</Container>;
}

Actions.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
};
