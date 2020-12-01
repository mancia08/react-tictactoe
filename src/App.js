
import React, { Component } from 'react'
import Game from './components/Game'
import MyProvider from './context/MyProvider'

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
          <Game />
        </div>
      </MyProvider>
    );
  }
}

export default App;