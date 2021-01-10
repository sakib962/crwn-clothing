import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';

import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";


const Header = ({currentUser, cartHidden}) => {
  return (
    <div className="header">
        <Link to='/' className='logo-container'>
          <Logo className='logo'/>
        </Link>
        <div className='options'>
          <Link to='/shop' className='option'>SHOP</Link>
          <Link to='/contact' className='option'>CONTACT</Link>
          {
            currentUser ?
            <div className="options">
              <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
              {
                currentUser.photoURL?
                <img src={currentUser.photoURL} alt={currentUser.displayName} />
                :
                null
              }
              
            </div>
            
            : 
            <Link to='/signin' className='option'>SIGN IN</Link>
          }
          <CartIcon className='option'/>
        </div>
        {
          cartHidden ? null : <CartDropdown />
        }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);