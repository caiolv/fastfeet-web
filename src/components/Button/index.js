import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ onClick, text, secondary, icon }) {
  return (
    <Container onClick={onClick} secondary={secondary}>
      {icon}
      <span>{text}</span>
    </Container>
  );
}

Button.propTypes = {
  icon: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
};
Button.defaultProps = {
  secondary: false,
};
