import './checkout-item.styles.scss';
import { removeItem, addItem, decreaseItem } from '../../redux/cart/cart.action'
import { connect } from 'react-redux';

const CheckoutItem = ({cartItem, removeItem, increaseItem, decreaseItem}) => {
  const {imageUrl, name, price, quantity} = cartItem;
  return (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item'/>
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
      <div className='arrow' onClick={() => decreaseItem(cartItem)}>&#10094;</div>
      <span className='value'>{quantity}</span>
      <div className='arrow' onClick={() => increaseItem(cartItem)}>&#10095;</div>
    </span>
    <span className='price'>${price}</span>
    <div className='remove-button' onClick={() => removeItem(cartItem)} >&#10005;</div>
  </div>
)};

const mapDispatchToProps = dispatch => ({
  removeItem: (item) => dispatch(removeItem(item)),
  increaseItem: item => dispatch(addItem(item)),
  decreaseItem: item => dispatch(decreaseItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);