import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAbi88juaetIHjoqS6R1OCzw3OMdscrHFg",
  authDomain: "fir-todo-app-1c0bc.firebaseapp.com",
  projectId: "fir-todo-app-1c0bc",
  storageBucket: "fir-todo-app-1c0bc.appspot.com",
  messagingSenderId: "460227585476",
  appId: "1:460227585476:web:030fae2543cd5397a8b091",
  measurementId: "G-NBKG614TFN"
};
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);