import React from 'react';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

export default function SearchInput({ placeholder }) {
  return (
    <Container>
      <MdSearch size={20} color="#999" />
      <input type="text" placeholder={placeholder} />
    </Container>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
};

SearchInput.defaultProps = {
  placeholder: 'Buscar',
};
