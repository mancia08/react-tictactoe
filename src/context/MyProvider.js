import React, {Component} from 'react';

export const MyContext = React.createContext();

class MyProvider extends Component {

  state= {
    squares: [0,1,2,3,4,5,6,7,8],
    isClicked : []
  }
  click = () => this.setState({isClicked: [...this.state.isClicked, 0]})

  render(){
    return (
      <MyContext.Provider value={{
        state: this.state,
        click: this.click
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default MyProvider;