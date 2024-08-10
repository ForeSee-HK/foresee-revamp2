// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmLL7nqt8nN24Ci9lrkyB8K5XOel84sho",
  authDomain: "foresee-hkust-games.firebaseapp.com",
  projectId: "foresee-hkust-games",
  storageBucket: "foresee-hkust-games.appspot.com",
  messagingSenderId: "781810062061",
  appId: "1:781810062061:web:ad1f804955f273b2b432e4",
  measurementId: "G-K112CTM0S0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
