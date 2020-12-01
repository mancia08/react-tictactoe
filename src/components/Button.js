import React from 'react';
import styled from "styled-components"
import { MyContext } from '../context/MyProvider';

const Square = styled.button`

`

const Button = (props) =>
<MyContext.Consumer>
    {value => (
  <Square onClick={props.action}>{props.text}</Square>)}</MyContext.Consumer>


export default Button;