import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MEASURMENTID,
//   appId: process.env.REACT_APP_FIREBASE_APPID,
//   measurementId: process.env.REACT_APP_FIREBASE_MESSAGEINGSENDERID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyC0BklSp_m_ztzFb9pddRWtR6r2QpkQsWI",
  authDomain: "fitness-app-2023.firebaseapp.com",
  projectId: "fitness-app-2023",
  storageBucket: "fitness-app-2023.appspot.com",
  messagingSenderId: "336327718015",
  appId: "1:336327718015:web:18223d5a0515033e443b4a",
  measurementId: "G-QJS5066VVL",
};

console.log(firebaseConfig);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
};
