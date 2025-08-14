// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAC0Ue7ISJ7OPaA0lux97Xi6Mqlm2-wZY4",
    authDomain: "kaligandakisuppliers.firebaseapp.com",
    projectId: "kaligandakisuppliers",
    storageBucket: "kaligandakisuppliers.firebasestorage.app",
    messagingSenderId: "79756861760",
    appId: "1:79756861760:web:cacf844342790923929aa5",
    measurementId: "G-9TD5P5LFW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db= getFirestore(app);

export {app,auth, db};

