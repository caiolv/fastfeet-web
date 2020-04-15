import React from 'react';
import PropTypes from 'prop-types';
import randomColor from 'randomcolor';

import { Container } from './styles';

export default function CourierAvatar({ courier }) {
  const names = courier.name.split(' ');
  return (
    <Container color={randomColor({ luminosity: 'dark' })}>
      {courier.avatar ? (
        <img src={courier.avatar.url} alt={courier.name} />
      ) : (
        <span>{`${names[0][0]}${names[1][0]}`}</span>
      )}
    </Container>
  );
}

CourierAvatar.propTypes = {
  courier: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
