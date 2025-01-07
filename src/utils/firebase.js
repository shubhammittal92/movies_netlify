// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
<<<<<<< HEAD
  apiKey: "AIzaSyAQFdgTEzc7VkXUHF0e7AP0-E4kx0NTGf4",
  authDomain: "netflixgpt-b7165.firebaseapp.com",
  projectId: "netflixgpt-b7165",
  storageBucket: "netflixgpt-b7165.firebasestorage.app",
  messagingSenderId: "315976586776",
  appId: "1:315976586776:web:fc93b5c3aead7c6653556d",
  measurementId: "G-2FJ0X9Z1Q2"
=======
  apiKey: "AIzaSyAwKbz6Wo1UVp1BzKSJVXV6hTz3vwy74k8",
  authDomain: "netflixgpt-57a56.firebaseapp.com",
  projectId: "netflixgpt-57a56",
  storageBucket: "netflixgpt-57a56.appspot.com",
  messagingSenderId: "1093133802935",
  appId: "1:1093133802935:web:c284961959cce2a54adc32",
  measurementId: "G-DEHFXGZ999",
>>>>>>> a296deaec28a3f2ea500cfb9eadafc4420faf1b9
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
