import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';

import { Container, Select } from './styles';

export default function SelectInput({
  name,
  nameId,
  label,
  data,
  placeholder,
}) {
  const selectRef = useRef(null);
  const { registerField, defaultValue, fieldName } = useField(nameId);

  const filter = (inputValue) => {
    return data.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = (inputValue) =>
    new Promise((resolve) => {
      resolve(filter(inputValue));
    });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'select.state.value.value',
      getValue: (ref) => {
        if (!ref.select.state.value) {
          return '';
        }
        return ref.select.state.value.value;
      },
    });
  }, [fieldName, name, registerField]);

  return (
    <Container>
      <strong>{label}</strong>
      <Select
        cacheOptions
        defaultOptions={data}
        placeholder={placeholder}
        loadOptions={promiseOptions}
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
      />
    </Container>
  );
}

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  nameId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string.isRequired,
};
