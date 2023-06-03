// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD1ZuXyZziF4lCLdb3rDsjZx8fROz_Rog",
  authDomain: "evanievas-arte.firebaseapp.com",
  projectId: "evanievas-arte",
  storageBucket: "evanievas-arte.appspot.com",
  messagingSenderId: "215009155300",
  appId: "1:215009155300:web:3ad8a917948e9215c274f1",
  measurementId: "G-10X0JFN4M1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
