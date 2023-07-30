import React from "react";
import { useState } from "react";

const Square = (props) => {
  return (
    <div className="boundary" onClick={props.onClick}>
      <div className="square">
        <h5>{props.value}</h5>
      </div>
    </div>
  );
};

export default Square;
