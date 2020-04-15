import React from 'react';
import PropTypes from 'prop-types';

import { Container, UnformInput } from './styles';

export default function Input({ label, name, placeholder }) {
  return (
    <Container>
      <strong>{label}</strong>
      <UnformInput name={name} placeholder={placeholder} />
    </Container>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
