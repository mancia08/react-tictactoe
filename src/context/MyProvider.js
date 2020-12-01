import React, { Component } from "react";

export const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    squares: [
      { name: 0, isClicked: false, playerClicked: 0 },
      { name: 1, isClicked: false, playerClicked: 0 },
      { name: 2, isClicked: false, playerClicked: 0 },
      { name: 3, isClicked: false, playerClicked: 0 },
      { name: 4, isClicked: false, playerClicked: 0 },
      { name: 5, isClicked: false, playerClicked: 0 },
      { name: 6, isClicked: false, playerClicked: 0 },
      { name: 7, isClicked: false, playerClicked: 0 },
      { name: 8, isClicked: false, playerClicked: 0 },
    ],
    player: 0
  };
  click = (pizza) => {
      let newSquares= this.state.squares.slice();
      let playerClicked = this.state.player===0 ? 1 : 2
      pizza.isClicked= true;
      pizza.playerClicked= playerClicked
      this.setState({squares: newSquares, player: playerClicked}
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
