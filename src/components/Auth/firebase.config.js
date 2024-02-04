// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAp1Ez_HtzBbYqW-PKFb_r-4IE9r0MxKcE",
    authDomain: "whell-be-alright.firebaseapp.com",
    projectId: "whell-be-alright",
    storageBucket: "whell-be-alright.appspot.com",
    messagingSenderId: "538102414035",
    appId: "1:538102414035:web:221c3b92413e4bc7ba3226",
    measurementId: "G-LSY55SLW2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

