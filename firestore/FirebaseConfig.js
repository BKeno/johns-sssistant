import Constants from "expo-constants";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: Constants.expoConfig.extra.EXPO_PUBLIC_APIKEY,
  authDomain: Constants.expoConfig.extra.EXPO_PUBLIC_UTHDOMAIN,
  projectId: Constants.expoConfig.extra.EXPO_PUBLIC_PROJECTID,
  storageBucket: Constants.expoConfig.extra.EXPO_PUBLIC_STORAGEBUCKET,
  messagingSenderId: Constants.expoConfig.extra.EXPO_PUBLIC_MESSAGINGSENDERID,
  appId:Constants.expoConfig.extra.EXPO_PUBLIC_APPID,
  measurementId: Constants.expoConfig.extra.EXPO_PUBLIC_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };