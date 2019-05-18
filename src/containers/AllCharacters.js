import React, { PureComponent } from 'react';
import Characters from '../components/characters/Characters';
import Loading from '../components/Loading';
import { getCharacters } from '../services/rickAndMortyApi';

//add page to state and create buttons ti increment and decrement page
//use page to page through api
//can't to past last page
//can't go before first page
//make a paging componenet

export default class AllCharacters extends PureComponent {
  state = {
    characters: [],
    loading: true,
    currentPage: 1,
    totalPages: 1
  }
  
  fetchCharacters = () => {
    this.setState({ loading: true });
    getCharacters(this.state.currentPage)
      .then(({ totalPages, characters }) => this.setState({ 
        totalPages,
        characters, 
        loading: false 
      }));
  }
  
  nextPage = page => {
    this.setState({ currentPage: page });
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.currentPage !== this.state.currentPage) {
      this.fetchCharacters();
    }
  }

  render() {
    const { 
      characters, 
      loading,
      currentPage,
      totalPages
    } = this.state;
    if(loading) return <Loading />;

    return (
      <>
        {currentPage > 1 && 
          <button onClick={() => this.nextPage(currentPage - 1)}>Previous Page</button>}
        {`${currentPage} / ${totalPages}`}
        {currentPage < totalPages &&
          <button onClick={() => this.nextPage(currentPage + 1)}>Next Page</button>}
          {/* {children} */}
        <Characters characters={characters} />
      </>
    );
  }
}
