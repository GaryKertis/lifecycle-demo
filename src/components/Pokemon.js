/* eslint-disable jsx-a11y/alt-text */
import React from "react";
class Pokemon extends React.Component {
  render() {
    return (
      <div className="pokemon">
        <h1>{this.props.name}</h1>
        <p>
          <img src={this.props.imgUrl} />
        </p>
        <button onClick={() => this.props.remove(this.props.name)}>
          Remove
        </button>
      </div>
    );
  }
}

export default Pokemon;
