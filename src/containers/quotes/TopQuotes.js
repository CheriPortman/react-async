import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Quotes from '../../components/quotes/Quotes';
import Loading from '../../components/Loading';
import { getQuotes } from '../../services';


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
    getQuotes(this.props.count)
      .then(quotes => this.setState({ quotes, loading: false }));
  }

  componentDidMount() {
    this.fetchQuotes();
  }

  componentDidUpdate(prevProps) {
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
