import React, { Component } from "react";

export const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    squares: [
      { name: 0, isClicked: false, playerClicked: false },
      { name: 1, isClicked: false, playerClicked: false },
      { name: 2, isClicked: false, playerClicked: false },
      { name: 3, isClicked: false, playerClicked: false },
      { name: 4, isClicked: false, playerClicked: false },
      { name: 5, isClicked: false, playerClicked: false },
      { name: 6, isClicked: false, playerClicked: false },
      { name: 7, isClicked: false, playerClicked: false },
      { name: 8, isClicked: false, playerClicked: false },
    ],
    player: 1,
    winArr: [
      { first: 0, second: 1, third: 2 },
      { first: 3, second: 4, third: 5 },
      { first: 6, second: 7, third: 8 },
      { first: 0, second: 3, third: 6 },
      { first: 1, second: 4, third: 6 },
      { first: 2, second: 5, third: 8 },
      { first: 0, second: 4, third: 8 },
      { first: 2, second: 4, third: 6 },
    ],
  };

  click = (event) => {
    if (event.isClicked === false) {
      let newSquares = this.state.squares.slice();
      event.isClicked = true;
      event.playerClicked = this.state.player;
      let newPlayer = this.state.player === 1 ? 2 : 1;
      this.setState({ squares: newSquares, player: newPlayer });
      this.win();
    }
  };

  win = () => {
    this.state.winArr.map(e => {
      this.state.squares[e.first].playerClicked ===
      this.state.squares[e.second].playerClicked &&
      this.state.squares[e.first].playerClicked ===
        this.state.squares[e.third].playerClicked &&
      console.log(`${this.state.squares[e.first].playerClicked} won`)
    })
  };

  /* win = () => {
    this.state.squares[0].playerClicked ===
      this.state.squares[1].playerClicked &&
      this.state.squares[0].playerClicked ===
        this.state.squares[2].playerClicked &&
      console.log(`${this.state.squares[0].playerClicked} won`);
  }; */

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          action: this.click,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
