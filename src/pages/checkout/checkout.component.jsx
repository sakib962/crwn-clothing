import './checkout.styles.scss';

import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const Checkout = ({ cartItems, total }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Products</span>
        </div>
        <div className='header-block'>
          <span>Discription</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem => 
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        )
      }
      <div className='total'>
        <span>TOTAL: ${total}</span>
      </div>
      <div className='test-warning'>
        * Please use the following test credit cart for payments *
        <br/>
        <span className='number'>4242 4242 4242 4242</span> - Exp: <span className='number'>01/20</span> - CVV: <span className='number'>123</span>
      </div>
      <StripeCheckoutButton price={total}/>
    </div>    
  )
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  total: selectCartTotal(state)
})

export default connect(mapStateToProps)(Checkout);