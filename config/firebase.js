// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8akCSS2rtnasFfpXCGnk1PqI3phmje00",
  authDomain: "blogyan-194a0.firebaseapp.com",
  projectId: "blogyan-194a0",
  storageBucket: "blogyan-194a0.appspot.com",
  messagingSenderId: "289441684655",
  appId: "1:289441684655:web:b9d164723e460cd599085a",
  measurementId: "G-GB0KNFKT9H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export {db}
// const analytics = getAnalytics(app);