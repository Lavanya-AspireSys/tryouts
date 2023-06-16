import React from "react";
import HOC from "./hoc";

function Welcome(props) {
  return <h1>Welcome {props.name}</h1>;
}

export default HOC(Welcome);