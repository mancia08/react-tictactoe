
import React, { Component } from 'react'
import Board from './components/Board'
import MyProvider from './context/MyProvider'

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
          <Board />
        </div>
      </MyProvider>
    );
  }
}

export default App;