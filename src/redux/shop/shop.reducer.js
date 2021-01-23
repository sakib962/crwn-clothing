// import SHOP_DATA from './shop.data';
//don't need shop data

import shopActions from './shop.action.types';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
}

const shopReducer = (state = INITIAL_STATE, action = {}) => {
  switch(action.type) {
    case shopActions.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      }
    case shopActions.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false
      }
    case shopActions.FETCH_COLLECTIONS_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default: 
      return state;
  }
}

export default shopReducer;