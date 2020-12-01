import React, {Component} from 'react';

export const MyContext = React.createContext();

class MyProvider extends Component {

  state= {
    squares: [0,1,2,3,4,5,6,7,8]
  }

  render(){
    return (
      <MyContext.Provider value={{
        state: this.state,
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default MyProvider;