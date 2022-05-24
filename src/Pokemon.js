/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { myLogger } from './util';

class Pokemon extends React.Component {
  constructor() {
    super();
    this.logger = myLogger.bind(this);
    this.logger('constructor', 'red');
  }

  componentDidMount() {
    this.logger('componentDidMount', 'red');
  }

  componentDidUpdate() {
    this.logger('componentDidUpdate', 'red');
  }

  componentWillUnmount() {
    this.logger('componentWillUnmount', 'red');
  }

  handleClick() {
    this.logger('User clicked button!');
    this.setState({ newValue: 'newValue' });
    this.props.callback('I am a function');
  }

  render() {
    this.logger('render');
    return (
      <div>
        <img src={this.props.imgUrl} />
        <div>
          <button onClick={() => this.handleClick()}>Call Callback</button>
        </div>
      </div>
    );
  }
}

export default Pokemon;
