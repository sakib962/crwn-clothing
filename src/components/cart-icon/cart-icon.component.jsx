import './cart-icon.styles.scss';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

const CartIcon = ({ toggleCartHidden, totalItem }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingBag className='shopping-icon'/>
    <span className='item-count'>{totalItem}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  totalItem: selectCartItemsCount
})
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);