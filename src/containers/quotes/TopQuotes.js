import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Quotes from '../../components/Quotes';


export default class TopQuotes extends PureComponenet {
  static PropTypes = {
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
}
