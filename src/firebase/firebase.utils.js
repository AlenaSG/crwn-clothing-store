import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAeoJIbDKII1yWi0jpvaFCI82_aPG_BDZ8",
    authDomain: "crwn-db-5a0ed.firebaseapp.com",
    databaseURL: "https://crwn-db-5a0ed.firebaseio.com",
    projectId: "crwn-db-5a0ed",
    storageBucket: "crwn-db-5a0ed.appspot.com",
    messagingSenderId: "588236521553",
    appId: "1:588236521553:web:e8f03fea217f70cf6f3870",
    measurementId: "G-LD79QZH20V"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;