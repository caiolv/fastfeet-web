import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';

import { Container, SelectContainer } from './styles';

export default function SelectInput({
  name,
  objectName,
  label,
  data,
  placeholder,
  ...rest
}) {
  const selectRef = useRef(null);
  const { registerField, defaultValue, fieldName } = useField(objectName);

  useEffect(() => {
    registerField({
      name,
      ref: selectRef.current,
      path: 'state.value.value',
      getValue: (ref) => {
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, name, registerField]);

  return (
    <Container>
      <strong>{label}</strong>

      <SelectContainer
        options={data}
        placeholder={placeholder}
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
    </Container>
  );
}

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  objectName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string.isRequired,
};
