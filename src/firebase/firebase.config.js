// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtx7C9dwd1D3IMm_11_itC1wdPFW0tTFY",
  authDomain: "recap-auth-firebase-context.firebaseapp.com",
  projectId: "recap-auth-firebase-context",
  storageBucket: "recap-auth-firebase-context.appspot.com",
  messagingSenderId: "45895540405",
  appId: "1:45895540405:web:06b4d2b0f3e4afe1d368fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;