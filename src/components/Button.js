import React from 'react';
import styled from "styled-components"
/* import { MyContext } from '../context/MyProvider'; */

const Square = styled.button`

`

const Button = (props) =>
  <Square>{props.text}</Square>


export default Button;