import { ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, ProfilePic } from './header.styles'

import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";


const Header = ({currentUser, cartHidden}) => {
  return (
    <HeaderContainer className="header">
        <LogoContainer to='/'>
          <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to='/shop'>SHOP</OptionLink>
          <OptionLink to='/contact'>CONTACT</OptionLink>
          {
            currentUser ?
            <OptionsContainer>
              <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
              {
                currentUser.photoURL?
                <ProfilePic src={currentUser.photoURL} alt={currentUser.displayName} />
                :
                null
              }
            </OptionsContainer>   
            : 
            <OptionLink to='/signin'>SIGN IN</OptionLink>
          }
          <CartIcon/>
        </OptionsContainer>
        {
          cartHidden ? null : <CartDropdown />
        }
    </HeaderContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);