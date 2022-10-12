// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJlL-hXwMjK5kU5wj4egW-ZOIi9QWTN10",
    authDomain: "budget-app-e5f03.firebaseapp.com",
    projectId: "budget-app-e5f03",
    storageBucket: "budget-app-e5f03.appspot.com",
    messagingSenderId: "616449304671",
    appId: "1:616449304671:web:f4812f045c6fa371e4d3ea",
    measurementId: "G-T632Y2WPHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

export {auth, db};
