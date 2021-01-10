import  cartActions from './cart.actions.types';

export const toggleCartHidden = () => ({
  type: cartActions.CART_DROPDOWN_TOGGLE
});

export const addItem = (item) => ({
  type: cartActions.ADD_ITEM,
  payload: item
})
