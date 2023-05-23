import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCcJWyUZsC9vsDaTGaKv4syW2QaRvAOJdQ",
    authDomain: "disneyplus-clone-56bfb.firebaseapp.com",
    projectId: "disneyplus-clone-56bfb",
    storageBucket: "disneyplus-clone-56bfb.appspot.com",
    messagingSenderId: "144849845644",
    appId: "1:144849845644:web:0d43b32120db3c30232aa9",
    measurementId: "G-TB0V5001QW"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage();


export { auth, provider, storage };
export default db;