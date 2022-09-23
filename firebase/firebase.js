import firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore";
// import "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

import {
  getAuth,
  browserSessionPersistence,
  setPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmIJaQVYdh4AK87hs7HcCEjlN6M39eUBY",
  authDomain: "ii-iframe.firebaseapp.com",
  projectId: "ii-iframe",
  storageBucket: "ii-iframe.appspot.com",
  messagingSenderId: "512785522593",
  appId: "1:512785522593:web:ac41335f5f24e7dae6b5e0",
  measurementId: "G-RE0LWR88JY",
};

// if (!firebase.apps.length) {
//   firebase.initializeApp(clientCredentials);
// }

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Firebase
// const analytics = getAnalytics(app);

// export const auth = app.auth();

// function createFirebaseApp(config) {
//   try {
//     return getApp();
//   } catch {
//     console.log("failed to create firebase app");
//     let apps = getApps();

//     // TODO maybe I need this type of check? idk honestly
//     // if (typeof window !== "undefined" && !apps.length) {
//     return initializeApp(config);
//     // }
//   }
// }
// console.log(firebase);
// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig);
// }

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const app = createFirebaseApp(firebaseConfig);

// const app = initializeApp(firebaseConfig);

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
// const app = initializeApp(firebaseConfig);
// const app = createFirebaseApp(firebaseConfig);

// const firebaseApp = createFirebaseApp(firebaseConfig);
// export const auth = getAuth(firebaseApp);
// const persist = setPersistence(auth, browserSessionPersistence);

// export default app;
