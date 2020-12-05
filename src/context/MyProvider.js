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
    won:false
  };


  click = event => {
    if (!event.isClicked) {
      this.handleClick(event)
      this.win()
    }
  };

  handleClick = (event) => {
    event.isClicked = true;
      event.playerClicked = this.state.player;
      let newPlayer = this.state.player === 1 ? 2 : 1;
      this.setState({ player: newPlayer });
  }


  win = () => {
    this.state.winArr.map(e => (
      this.state.squares[e.first].playerClicked ===
      this.state.squares[e.second].playerClicked &&
      this.state.squares[e.first].playerClicked ===
      this.state.squares[e.third].playerClicked &&
      this.state.squares[e.first].playerClicked &&
        
      this.setState({won: this.state.squares[e.first].playerClicked})
    ))
  };



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
