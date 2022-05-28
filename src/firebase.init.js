// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1cYwpZIZVKMNS7lyJRqmN-tL1kK7h_40",
  authDomain: "fruits-warehouse-bf559.firebaseapp.com",
  projectId: "fruits-warehouse-bf559",
  storageBucket: "fruits-warehouse-bf559.appspot.com",
  messagingSenderId: "287021785808",
  appId: "1:287021785808:web:b9937feaff6270364cf4d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const  auth = getAuth(app);

export default auth;