import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';
import styles from './Quotes.css';


//presentational componenet

function Quotes({ quotes }) {
  const quoteList = quotes.map((quote, i) => (
    // quote={quote} key: quote value: the individual quote
    //quotes is the array holding all the quotes (aka quoteList, which is an array)
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
