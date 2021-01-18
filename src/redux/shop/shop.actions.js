import shopActions from './shop.action.types';

export const updateCollections = (collections) => ({
  type: shopActions.UPDATE_COLLECTIONS,
  payload: collections
})