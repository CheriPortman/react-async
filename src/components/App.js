import React, { useState } from 'react';
import TopQuotes from '../containers/quotes/TopQuotes'
//TODO: bring in CharacterQuotes


export default function App() {
  const [quotes, updateQuotes] = useState('top');

  return (
    <>
      <button onClick={() => updateQuotes('top')}>Top Quotes</button>
      <button onClick={() => updateQuotes('characrter')}>Characrter Quotes</button>
      {quotes === 'top' && <TopQuotes />}
      {quotes === 'characrter' && <CharacterQuotes />}
    </>
  );
}
