import React from 'react';
import PropTypes from 'prop-types';

//presentational componenet
//display name, status, species, image
function Character({ character }) {
  const {
    name,
    status,
    species,
    image
  } = character;
  return (
    <section>
      <img src={image} />
      <p>{name}</p>
      <p>{status}</p>
      <p>{species}</p>
    </section>
  );
}

Character.propTypes = {
  character: PropTypes.shaped({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};

export default Character;
