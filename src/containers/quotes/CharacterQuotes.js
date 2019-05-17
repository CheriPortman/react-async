import React from 'react';
import PropTypes from 'prop-types';
import Quotes from '../../components/quotes/Quotes';
import Loading from '../../components/Loading';
import { getCharacterQuotes } from '../../service/futuramaApi.js';

export default class CharacterQuotes extends PureComponenet {
  static propTypes = {
    count: PropTypes.number
  }

  static defaultProps = {
    count: 10
  }

  state = {
    quotes: [],
    loading: true
  }

  fetchQuotes = () => {
    this.setState({ loading: true });
    const { count } = this.props;
    getCharacterQuotes(this.state.character, count)
      .then(quotes => this.setState({ quotes, loading: false }));
  }

  componenetDidMount() {
    this.fetchQuotes();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.count !== this.props.count || prevState.character !== this.state.character) {
      this.fetchQuotes();
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { character, quotes, loading } = this.state;
    if(loading) return <Loading />;

    const options = ['Fry', 'Bender', 'Leela', 'Amy', 'Hermes']
      .map(option => (
        <option key={option} value={option}>{option}</option>
      ));

    return (
      <>
        <select name="character" value={character} onChange={this.handleChange}>{options}</select>
        <Quotes quotes={quotes} />
      </>
    );
  }
}
