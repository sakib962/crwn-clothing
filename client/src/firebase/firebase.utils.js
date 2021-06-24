import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCy_biX0NiPLlTyYl46VCuUoDhhQNp-LF4",
  authDomain: "crwn-db-806bf.firebaseapp.com",
  projectId: "crwn-db-806bf",
  storageBucket: "crwn-db-806bf.appspot.com",
  messagingSenderId: "268838061725",
  appId: "1:268838061725:web:2b56f230f4bcf1118c3674",
  measurementId: "G-EBVPPZWXKX"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}else {
  firebase.app(); // if already initialized, use that one
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // console.log(userAuth)
  if(!userAuth) return;
  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get()
  // console.log(snapShot)

  if(!snapShot.exists) {
    const {displayName, email, photoURL} = userAuth;
    const joined = new Date();

    try {
      userRef.set({
        displayName: displayName || additionalData.displayName,
        email,
        photoURL,
        joined
      })
    } catch(error) {
      console.log('error creating user ', error.message)
    }
  }

  return userRef;
}

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
  console.log(objectsToAdd)
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc(obj.title);
    batch.set(newDocRef, obj)
  });

  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items } = doc.data()
    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items
    }
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
})

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;