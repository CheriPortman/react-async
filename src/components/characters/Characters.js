import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import styles from './Characters.css';

//presentational component

function Characters({ characters }) {
  const characterList = characters.map((character, i) => (
    <li key={i}>
      <Character character={character} />
    </li>
  ));

  return (
    <ul className={styles.Characters}>
      {characterList}
    </ul>
  );
}

Characters.propTypes = {
  characters: PropTypes.array.isRequired
};

export default Characters;
