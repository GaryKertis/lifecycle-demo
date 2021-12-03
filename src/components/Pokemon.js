/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Pokemon = (props) => {
  return (
    <div className="pokemon">
      <h1>{props.name}</h1>
      <p>
        <img src={props.imgUrl} />
      </p>
      <button onClick={() => props.remove(props.name)}>Remove</button>
    </div>
  );
};

export default Pokemon;
