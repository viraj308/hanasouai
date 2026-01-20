// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgVzs7WIXJR3jvsaZTwfVf_flhud3j6Eo",
  authDomain: "kaiwa-app-f1d94.firebaseapp.com",
  projectId: "kaiwa-app-f1d94",
  storageBucket: "kaiwa-app-f1d94.firebasestorage.app",
  messagingSenderId: "384883148043",
  appId: "1:384883148043:web:28c2df9352ec631ddc4e0e",
  measurementId: "G-L0LYX4X5CR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);