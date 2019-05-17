import React from 'react';
import PropTypes from 'prop-types';


//display character, quote, and image
//function with return-> section -> image/quote.character/quote.quote
//Quote.propTypes -> character, quote, image, all required

function Quote({ quote }) {
  return (
    <section>
      <img src={quote.image} />
      <p>{quote.character}</p>
      <p>{quote.quote}</p>
    </section>
  );
}

Quote.propTypes = {
  quote: PropTypes.shape({
    character: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};

export default Quote;


