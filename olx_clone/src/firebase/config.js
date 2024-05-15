// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const analytics = getAnalytics(Firebase);