import firebase from "firebase/app";
import "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {
  getAuth,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAvN1yjX6diFBBmEoqLASIsw0keecFwr2Q",
  authDomain: "bmc-generator.firebaseapp.com",
  projectId: "bmc-generator",
  storageBucket: "bmc-generator.appspot.com",
  messagingSenderId: "1037555407908",
  appId: "1:1037555407908:web:d4a0ac9ea8f65d9336ccb1",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

