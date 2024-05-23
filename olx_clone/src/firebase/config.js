// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDlmETIuYoxejGqAyrcXdaml7aGtEqkKCo",
  authDomain: "olx-clone-3ac2e.firebaseapp.com",
  projectId: "olx-clone-3ac2e",
  storageBucket: "olx-clone-3ac2e.appspot.com",
  messagingSenderId: "595799419582",
  appId: "1:595799419582:web:4c8ac75dfdd9133b724cef",
  measurementId: "G-2EKM9Q3PW8",
};

// Initialize Firebase
export const Firebase = initializeApp(firebaseConfig);

// const analytics = getAnalytics(Firebase);

export const auth = getAuth(Firebase);

export const firestore = getFirestore(Firebase);

export const storage = getStorage(Firebase);
