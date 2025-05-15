// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtlidK5TiseRcNVLrW2LiQOMGL2D8tb-A",
  authDomain: "coffee-shop-client-5ea84.firebaseapp.com",
  projectId: "coffee-shop-client-5ea84",
  storageBucket: "coffee-shop-client-5ea84.firebasestorage.app",
  messagingSenderId: "82175917432",
  appId: "1:82175917432:web:82b26732ace461efe75c8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);