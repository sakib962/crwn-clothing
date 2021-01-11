import cartActions from './cart.actions.types';

import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
  cartHidden: true,
  cartItems: []
}
const cartReducer = (state = INITIAL_STATE, action = {}) => {
  switch(action.type) {
    case cartActions.CART_DROPDOWN_TOGGLE:
      return {
        ...state,
        cartHidden: !state.cartHidden
      }
    case cartActions.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case cartActions.REMOVER_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      }
    default: 
      return state
  }
}

export default cartReducer;