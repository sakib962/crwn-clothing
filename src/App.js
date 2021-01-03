import './App.css';
import { Component } from 'react';
import HomePage from './HomePage.component'

class App extends Component {
  state = {
    number: 7
  }
  handleClick = () => {
    this.setState((prevState, prevProps) => {
      return {number: prevState.number + prevProps.increment}
    }, () => {
      console.log(this.state.number)
    });
    
  }
  render() {
    return (
      <div >
        <HomePage/>
      </div>
    );
  }
}

export default App;
