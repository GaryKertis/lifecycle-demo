/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { myLogger } from './util';

class Pokemon extends React.Component {
  constructor() {
    super();
    this.logger = myLogger.bind(this);
    this.logger('constructor', 'green');
  }

  componentDidMount() {
    this.logger('componentDidMount', 'green');
  }

  componentDidUpdate() {
    this.logger('componentDidUpdate', 'green');
  }

  componentWillUnmount() {
    this.logger('componentWillUnmount', 'green');
  }

  render() {
    this.logger('render', 'green');
    return (
      <div>
        <img src={this.props.imgUrl} />
      </div>
    );
  }
}

export default Pokemon;
