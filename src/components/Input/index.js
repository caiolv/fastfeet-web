import React from 'react';
import PropTypes from 'prop-types';

import { Container, UnformInput } from './styles';

export default function Input({ label, name, placeholder, width }) {
  return (
    <Container width={width}>
      <strong>{label}</strong>
      <UnformInput name={name} placeholder={placeholder} />
    </Container>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  width: PropTypes.string,
};
Input.defaultProps = {
  width: '100%',
};
