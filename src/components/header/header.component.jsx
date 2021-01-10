import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';

import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

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

const mapStateToProps = ({user: {currentUser}, cart: {cartHidden}}) => ({
  currentUser,
  cartHidden
})

export default connect(mapStateToProps)(Header);