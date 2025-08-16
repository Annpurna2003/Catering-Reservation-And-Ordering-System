import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjlZEryauHOYFAv8ZSlJKJ3PiYN3wH_H8",
  authDomain: "cathering-34236.firebaseapp.com",
  projectId: "cathering-34236",
  storageBucket: "cathering-34236.firebasestorage.app",
  messagingSenderId: "425189833731",
  appId: "1:425189833731:web:7132ce33187f4e0eeae236",
  measurementId: "G-QZ2SE9VN4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth=getAuth(app);
const db=getFirestore(app)
export {auth,db,app};