import React from 'react';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

export default function SearchInput({ placeholder, handleSearch }) {
  return (
    <Container>
      <MdSearch size={20} color="#999" />
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </Container>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  handleSearch: PropTypes.func.isRequired,
};

SearchInput.defaultProps = {
  placeholder: 'Buscar',
};
