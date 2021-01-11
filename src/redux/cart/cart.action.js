import  cartActions from './cart.actions.types';

export const toggleCartHidden = () => ({
  type: cartActions.CART_DROPDOWN_TOGGLE
});

export const addItem = (item) => ({
  type: cartActions.ADD_ITEM,
  payload: item
})

export const removeItem = (item) => ({
  type: cartActions.REMOVER_ITEM_FROM_CART,
  payload: item
})
