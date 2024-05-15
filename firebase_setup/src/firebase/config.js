import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCQcWt82_bbAtzRkg-CEZRPWsXgBRA4iAg",
  authDomain: "brotodemo.firebaseapp.com",
  projectId: "brotodemo",
  storageBucket: "brotodemo.appspot.com",
  messagingSenderId: "1016543800997",
  appId: "1:1016543800997:web:b1215c1b485184a561a74c",
  measurementId: "G-YMQG98CQ1R",
};

export const Firebase = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
