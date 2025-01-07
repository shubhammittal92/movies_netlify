// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQFdgTEzc7VkXUHF0e7AP0-E4kx0NTGf4",
  authDomain: "netflixgpt-b7165.firebaseapp.com",
  projectId: "netflixgpt-b7165",
  storageBucket: "netflixgpt-b7165.firebasestorage.app",
  messagingSenderId: "315976586776",
  appId: "1:315976586776:web:fc93b5c3aead7c6653556d",
  measurementId: "G-2FJ0X9Z1Q2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
