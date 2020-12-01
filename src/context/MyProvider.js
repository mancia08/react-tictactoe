import React, { Component } from "react";

export const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    squares: [
      { name: 0, isClicked: false },
      { name: 1, isClicked: false },
      { name: 2, isClicked: false },
      { name: 3, isClicked: false },
      { name: 4, isClicked: false },
      { name: 5, isClicked: false },
      { name: 6, isClicked: false },
      { name: 7, isClicked: false },
      { name: 8, isClicked: false },
    ],
    player: 0
  };
  click = (pizza) => {
      let newSquares= this.state.squares.slice();
      pizza.isClicked= true;
      this.setState({squares: newSquares})
      this.setState({player: this.state.player===0 ? 1 : 0})
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
