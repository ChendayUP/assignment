// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZf-Wvnq0MSKu59_WQXTEMTo7Dbt5YcSI",
  authDomain: "table-assignment-c9379.firebaseapp.com",
  projectId: "table-assignment-c9379",
  storageBucket: "table-assignment-c9379.appspot.com",
  messagingSenderId: "692454201530",
  appId: "1:692454201530:web:a952c125e836c63840ca83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)