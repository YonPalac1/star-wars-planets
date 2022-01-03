// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJLLLh5UuHxKUhN0DqyoLfv25tyOrFF40",
  authDomain: "sw-challenge-34c98.firebaseapp.com",
  projectId: "sw-challenge-34c98",
  storageBucket: "sw-challenge-34c98.appspot.com",
  messagingSenderId: "335537568464",
  appId: "1:335537568464:web:263279bc84448b3ca37cd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const googleAuthProvider = new GoogleAuthProvider();


export {
    db,
    googleAuthProvider
}