import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBSYlff3UCP2gAJLL_AAwdU2aTVVmUCLfc",
    authDomain: "crwn-db-f8b87.firebaseapp.com",
    databaseURL: "https://crwn-db-f8b87.firebaseio.com",
    projectId: "crwn-db-f8b87",
    storageBucket: "",
    messagingSenderId: "838632403416",
    appId: "1:838632403416:web:e1be8013d37cf990"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;