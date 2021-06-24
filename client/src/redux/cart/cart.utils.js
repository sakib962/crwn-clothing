
export const addItemToCart = (cartItems, itemToAdd) => {
  const itemExist = cartItems.find(cartItem => cartItem.id === itemToAdd.id);
  if(itemExist) {
    return cartItems.map(cartItem => 
      cartItem.id === itemToAdd.id 
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : {...cartItem}
    )
  } else {
    return [...cartItems, {...itemToAdd, quantity: 1}]
  }
}

export const decreaseItemFromCart = (cartItems, itemToDecrease) => {
  if(itemToDecrease.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== itemToDecrease.id)
  } else {
    return cartItems.map(cartItem => 
      cartItem.id === itemToDecrease.id 
      ? {...cartItem, quantity: cartItem.quantity - 1}
      : cartItem
    )
  }
}