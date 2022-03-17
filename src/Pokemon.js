/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const myLogger = (message) => {
  console.log(`%c${message}`, "color: red");
};
class Pokemon extends React.Component {
  constructor() {
    super();

    myLogger("constructor");
  }

  componentDidMount() {
    myLogger("componentDidMount");
  }

  componentDidUpdate() {
    myLogger("componentDidUpdate");
  }

  componentWillUnmount() {
    myLogger("componentWillUnmount");
  }

  handleClick() {
    myLogger("User clicked button!");
    this.setState({ newValue: "newValue" });
    this.props.callback("I am a function");
  }

  render() {
    myLogger("render");
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
