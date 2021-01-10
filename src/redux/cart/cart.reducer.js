import cartActions from './cart.actions.types';

const INITIAL_STATE = {
  cartHidden: true
}
const cartReducer = (state = INITIAL_STATE, action = {}) => {
  switch(action.type) {
    case cartActions.CART_DROPDOWN_TOGGLE:
      return {
        ...state,
        hidden: !state.hidden
      }
    default: 
      return state
  }
}

export default cartReducer;