// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTv4iup5B2MYS8wFmuUcjxlFFPBIrbymU",
    authDomain: "ticketail-e65c8.firebaseapp.com",
    projectId: "ticketail-e65c8",
    storageBucket: "ticketail-e65c8.appspot.com",
    messagingSenderId: "667926837168",
    appId: "1:667926837168:web:06eb2af341c41eccd88875"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const firestoreInit = () => app