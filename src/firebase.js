// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe7u9FAB_DxOobbWVXsWpIUkOFalIWayk",
  authDomain: "todo-app-key.firebaseapp.com",
  projectId: "todo-app-key",
  storageBucket: "todo-app-key.appspot.com",
  messagingSenderId: "711300310867",
  appId: "1:711300310867:web:557d2eb28cd8e6fc0863a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
