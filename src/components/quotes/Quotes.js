import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';
import styles from './Quotes.css';

function Quotes({ quotes }) {
  const quoteList = quotes.map((quote, i) => (
    <li key={i}>
      <Quote quote={quote} />
    </li>
  ));

  return (
    <ul className={styles.Quotes}>
      {quoteList}
    </ul>
  );
}

Quotes.propTypes = {
  quotes: PropTypes.array.isRequired
};

export default Quotes;
