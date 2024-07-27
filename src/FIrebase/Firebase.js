// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC4cvMH-aKVU4JOpGTonZ_pkcOTEItmHTQ",
    authDomain: "bike-rent-app-81995.firebaseapp.com",
    databaseURL:"https://bike-rent-app-81995-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bike-rent-app-81995",
    storageBucket: "bike-rent-app-81995.appspot.com",
    messagingSenderId: "1059981547267",
    appId: "1:1059981547267:web:f4d6d6b82ca5628db6fb36",
    measurementId: "G-D5CJMJW767"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const storage = getStorage(app); 
const db = getFirestore(app);
const database = getDatabase(app);

export { app, auth, storage, db , database}