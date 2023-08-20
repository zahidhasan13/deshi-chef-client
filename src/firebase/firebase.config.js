// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2whLRpSh1kbQJz4qFezPSBPRPuMuf4VI",
  authDomain: "deshi-chef-client.firebaseapp.com",
  projectId: "deshi-chef-client",
  storageBucket: "deshi-chef-client.appspot.com",
  messagingSenderId: "1013588481963",
  appId: "1:1013588481963:web:2e0e76efb92f9166faa4ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;