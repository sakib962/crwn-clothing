import './App.css';
import { Component } from 'react';
import HomePage from './pages/homepage/HomePage.component';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'


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
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
