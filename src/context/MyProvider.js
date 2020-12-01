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
  };

  click = (pizza) => console.log(pizza.name)

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
