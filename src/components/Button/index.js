import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ onClick, text, secondary, icon, type }) {
  return (
    <Container onClick={onClick} type={type} secondary={secondary}>
      {icon}
      <span>{text}</span>
    </Container>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.element.isRequired,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
};
Button.defaultProps = {
  secondary: false,
  type: 'button',
  onClick: () => {},
};
