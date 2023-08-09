import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig ={
    apiKey: "AIzaSyBTLKiIu-wvpndU06YBSnMoDhJf4lshIUQ",
  authDomain: "still-cipher-377219.firebaseapp.com",
  projectId: "still-cipher-377219",
  storageBucket: "still-cipher-377219.appspot.com",
  messagingSenderId: "952799442861",
  appId: "1:952799442861:web:91230864b5e61afafb9324",
  measurementId: "G-P8SJX3K5J1"
  };

  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
