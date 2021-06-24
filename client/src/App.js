import './App.scss';
import { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import {auth, createUserProfileDocument} from '../src/firebase/firebase.utils';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import { setCurrentUser } from './redux/user/user.action';

// import { selectCollectionForOverview } from './redux/shop/shop.select';
// import { addCollectionsAndDocuments } from './firebase/firebase.utils';

import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/shop.component';
import Checkout from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

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
      // console.log(this.state.number)
    });
    
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionArray } = this.props;
    console.log(collectionArray)
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          // console.log(snapShot)
          // console.log(snapShot.data())
          setCurrentUser({
              id : snapShot.id,
              ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth);
      }
      // console.log(userAuth);

      // addCollectionsAndDocuments('collections', collectionArray.map(({title, items}) => ({title, items})))
      // .catch(console.log)
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header/>   
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route 
              exact 
              path="/signin" 
              render={ () =>
                this.props.currentUser ? (
                  <Redirect to='/'/>
                ) : (
                  <SignInAndSignUp/>
                )
              }
            />
            <Route path='/checkout' component={Checkout}/>
          </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionArray: selectCollectionForOverview
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  test: 'testing...'
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
