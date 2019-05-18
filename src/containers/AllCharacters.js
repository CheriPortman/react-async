import React from 'react';
import Characters from '../components/characters/Characters';
import Loading from '../components/Loading';
import { getCharacters } from '../services/rickAndMortyApi';

export default class AllCharacters extends PureComponenet {
  state = {
    characters: [],
    loading: true
  }

  fetchCharacters = () => {
    this.setState({ loading: true });
    getCharacters()
      .then(({ characters }) => this.setState({ characters, loading: false }));
  }

  componenetDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters, loading } = this.state;
    if(loading) return <Loading />;

    return <Characters characters={characters} />;
  }
}
