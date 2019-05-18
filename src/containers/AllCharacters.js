import React, { PureComponent } from 'react';
import Characters from '../components/characters/Characters';
import Loading from '../components/Loading';
import { getCharacters } from '../services/rickAndMortyApi';
import Paging from '../components/paging/Paging';

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
       <Paging currentPage={currentPage} totalPages={totalPages} nextPage={this.nextPage}>
         <Characters characters={characters} />
       </Paging>
      </>
    );
  }
}
