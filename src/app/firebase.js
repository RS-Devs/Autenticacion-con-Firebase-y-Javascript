// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz3dx29U69nHWE4dvEU6jqkAyXxsiw2mo",
  authDomain: "auth-firebase-y-javascript.firebaseapp.com",
  projectId: "auth-firebase-y-javascript",
  storageBucket: "auth-firebase-y-javascript.appspot.com",
  messagingSenderId: "58712197727",
  appId: "1:58712197727:web:f1f9e10104be7e8e1369ea",
  measurementId: "G-TJH9T283LD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

