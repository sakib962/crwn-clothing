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

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  console.log(additionalData)
  if(!userAuth) return;
  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get()
  console.log(snapShot)

  if(!snapShot.exists) {
    const {email, photoURL} = userAuth;
    const joined = new Date();

    try {
      userRef.set({
        displayName: additionalData.displayName,
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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;