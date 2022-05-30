// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA01atPSaLgn1B3pWOAytBjLdWh2j7X4PI",
  authDomain: "job-board-a217a.firebaseapp.com",
  databaseURL: "https://job-board-a217a-default-rtdb.firebaseio.com",
  projectId: "job-board-a217a",
  storageBucket: "job-board-a217a.appspot.com",
  messagingSenderId: "185868143625",
  appId: "1:185868143625:web:9d9a7a1331afeef3ccbcd8",
  measurementId: "G-2X84MC5RR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const database = getDatabase(app);

