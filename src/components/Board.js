import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { MyContext } from '../context/MyProvider';

const GameBoard = styled.div`
  display: grid;
  grid-template-columns: 20vh 20vh 20vh;
  grid-template-rows: 20vh 20vh 20vh;
`;

const Board = () => 
<MyContext.Consumer>
    {value => (
        <GameBoard>
            {value.state.squares.map(square => 
            <Button text={square} key= {square}/>
            )}
        </GameBoard>
    )}
</MyContext.Consumer>
;

export default Board;
