import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Quotes from '../../components/quotes/Quotes';
import Loading from '../../components/Loading';
import { getQuotes } from '../../services/futuramaApi.js';


export default class TopQuotes extends PureComponent {
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
    getQuotes(this.props.count)  //this console logs to 10
      .then(quotes => this.setState({ quotes, loading: false }));
    console.log('fetchQuotes', this.state);
  }
  
  componentDidMount() {
    this.fetchQuotes();
  }
  
  componentDidUpdate(prevProps) {
    console.log('the problem is in componenetDidUpdate');
    if(prevProps.count !== this.props.count) {
      this.fetchQuotes();
    }
  }

  render() {
    const { quotes, loading } = this.state;
    if(loading) return <Loading />;

    return <Quotes quotes={quotes} />;
  }
}
