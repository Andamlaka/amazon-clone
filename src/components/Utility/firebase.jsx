
import firebase from "firebase/compat/app";
//Auth
 import {getAuth} from 'firebase/auth'
 import "firebase/compat/firestore"
 import "firebase/compat/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEGziPY_ZXaU5G2TVKJkusOrcm-EwgXas",
  authDomain: "clone-cea68.firebaseapp.com",
  projectId: "clone-cea68",
  storageBucket: "clone-cea68.firebasestorage.app",
  messagingSenderId: "1012592944912",
  appId: "1:1012592944912:web:77c34fea7bab67116ce795"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()