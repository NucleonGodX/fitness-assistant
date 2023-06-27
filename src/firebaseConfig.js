// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_SD-U_7v94G8BKY74-eL1Jv-C9ftxH0M",
  authDomain: "fitness-assis.firebaseapp.com",
  projectId: "fitness-assis",
  storageBucket: "fitness-assis.appspot.com",
  messagingSenderId: "312548681626",
  appId: "1:312548681626:web:2e8f0ef54cae360f19bc23",
  measurementId: "G-PZC4WS3T3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);