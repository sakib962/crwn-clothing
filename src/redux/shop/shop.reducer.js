// import SHOP_DATA from './shop.data';
//don't need shop data

import shopActions from './shop.action.types';

const INITIAL_STATE = {
  collections: null
}

const shopReducer = (state = INITIAL_STATE, action = {}) => {
  switch(action.type) {
    case shopActions.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    default: 
      return state;
  }
}

export default shopReducer;