import './cart-item.styles.scss';

const CartItem = ({cartItem}) => {
  console.log(cartItem)
  const {imageUrl, name, price, quantity} = cartItem;
  return (
  <div className='cart-item'>
    <img src={imageUrl} alt={name}/>
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>{quantity}&times;${price}</span>
    </div>
  </div>
)}

export default CartItem;