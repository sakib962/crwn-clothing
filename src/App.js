import './App.css';
import { Component } from 'react';
import HomePage from './pages/homepage/HomePage.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from '../src/firebase/firebase.utils';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  handleClick = () => {
    this.setState((prevState, prevProps) => {
      return {number: prevState.number + prevProps.increment}
    }, () => {
      console.log(this.state.number)
    });
    
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          console.log(snapshot)
          this.setState({
            currentUser: {
              id : snapshot.id,
              ...snapshot.data()
            }
          })
        })
      } else {
        this.setState({currentUser: userAuth})
      }
            
      console.log(userAuth)
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>   
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInAndSignUp} />
          </Switch>
      </div>
    );
  }
}

export default App;
