// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5lfIvSnKNy5XGNfaubuwzdJZTgSBj4I0",
    authDomain: "helping-hub.firebaseapp.com",
    projectId: "helping-hub",
    storageBucket: "helping-hub.appspot.com",
    messagingSenderId: "961230148101",
    appId: "1:961230148101:web:19626cc7f2fde258ca826c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;