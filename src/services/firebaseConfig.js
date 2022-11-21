// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFrdO4SZ-anglDhd0WoVjYsQ4Qw_KnWc0",
  authDomain: "react-45060-dan.firebaseapp.com",
  projectId: "react-45060-dan",
  storageBucket: "react-45060-dan.appspot.com",
  messagingSenderId: "306314293449",
  appId: "1:306314293449:web:b1d6f93aaadf1842929d18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);

// Variable con la database y el nombre de la lista de productos
export const productsList = collection(database, "products");

export const orderList = collection(database, "orders");
