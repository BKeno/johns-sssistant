// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7kmsbwZoUJR07gF5Nyca9F42oPcjkKv0",
  authDomain: "johnsassistant-a5f28.firebaseapp.com",
  projectId: "johnsassistant-a5f28",
  storageBucket: "johnsassistant-a5f28.appspot.com",
  messagingSenderId: "615453641529",
  appId: "1:615453641529:web:eaa6e49b4a0325f2e076e8",
  measurementId: "G-YMTJJE4W36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };