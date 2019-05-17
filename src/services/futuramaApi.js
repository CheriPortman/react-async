export const getQuotes = (count = 10) => {
  console.log('get quote');
  return fetch(`https://futuramaapi.herokuapp.com/api/quotes/${count}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Can\'t fetch your quote';

      return json;
    });
};

