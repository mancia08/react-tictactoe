import React from "react";
import styled from "styled-components";
import { MyContext } from "../context/MyProvider";

const Square = styled.button`
  background-color: ${(p) =>
    p.isClicked ? (p.player === 1 ? "red" : "blue") : "grey"};
`;

const Button = (props) =>
  <MyContext.Consumer>
    {(value) =>
      <Square
        isClicked={props.isClicked}
        player={props.player}
        onClick={props.action}
      >
        {props.text}
      </Square>
    }
  </MyContext.Consumer>;

export default Button;
