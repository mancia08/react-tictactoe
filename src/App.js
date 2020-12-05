import React, { Component } from "react";
import Board from "./components/Board";
import MyProvider, { MyContext } from "./context/MyProvider";

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
          <MyContext.Consumer>
            {(value) => (
              <>
                <Board />
                {!value.state.won && <p>{value.state.player}'s turn</p>}
                {value.state.won && (
                  <p>player {value.state.won} won the game!</p>
                )}
              </>
            )}
          </MyContext.Consumer>
        </div>
      </MyProvider>
    );
  }
}

export default App;
