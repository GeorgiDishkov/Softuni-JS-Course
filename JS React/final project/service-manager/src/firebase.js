// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1HnObkCnrRBi9jsoTTvfa8OaawepvHxI",
    authDomain: "carservices-f76fe.firebaseapp.com",
    projectId: "carservices-f76fe",
    storageBucket: "carservices-f76fe.appspot.com",
    messagingSenderId: "398630557718",
    appId: "1:398630557718:web:3c7a67cddac55bc10abd37",
    measurementId: "G-3335TT21JJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app