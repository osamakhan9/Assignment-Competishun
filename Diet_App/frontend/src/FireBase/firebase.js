import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig ={
  apiKey: "AIzaSyBTLKiIu-wvpndU06YBSnMoDhJf4lshIUQ",
    authDomain: "still-cipher-377219.firebaseapp.com",
    projectId: "still-cipher-377219",
    storageBucket: "still-cipher-377219.appspot.com",
    messagingSenderId: "952799442861",
    appId: "1:952799442861:web:c77b6636e362c6c2fb9324",
    measurementId: "G-KB5VGSJF8W"
  };

  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
