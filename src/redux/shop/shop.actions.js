import shopActions from './shop.action.types';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () => ({
  type: shopActions.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = (collections) => ({
  type: shopActions.FETCH_COLLECTIONS_SUCCESS,
  payload: collections
})

export const fetchCollectionsFailed = (errorMessage) => ({
  type: shopActions.FETCH_COLLECTIONS_FAILED,
  payload: errorMessage
})

export const fetchCollectionsStartAsync = () => (dispatch) => {
  const collectionRef = firestore.collection('collections');
  dispatch(fetchCollectionsStart());

  collectionRef.get().then(snapShot => {
    const collectionsMap =  convertCollectionsSnapshotToMap(snapShot);
    dispatch(fetchCollectionsSuccess(collectionsMap));    
  }).catch(error => dispatch(fetchCollectionsFailed(error.message)))
}