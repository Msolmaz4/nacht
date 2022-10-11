// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBis56rokLj42LZwc4yP2FYJPvMW2XRqD0",
  authDomain: "nacht-2decf.firebaseapp.com",
  projectId: "nacht-2decf",
  storageBucket: "nacht-2decf.appspot.com",
  messagingSenderId: "395888616493",
  appId: "1:395888616493:web:d939e4fe5d8afdc4c4c4a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);