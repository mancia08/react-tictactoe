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
    player: 1
  };

  click = (pizza) => {
      let newSquares= this.state.squares.slice();
      pizza.isClicked= true;
      pizza.playerClicked= this.state.player
      let newPlayer = this.state.player === 1 ? 2 : 1
      this.setState({squares: newSquares, player: newPlayer}
        )
  }

/* NOT BREAKING CODE */
/*   click = (pizza) => (
    pizza.isClicked= true
) */

/*   console.log((this.state.squares[pizza.name])) */

  /* console.log((this.state.squares[pizza.name])) */

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
