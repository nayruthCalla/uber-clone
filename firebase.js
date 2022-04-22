// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYw_lYfcQld1mYmNsvXYKUv-_Ha1bIkoY",
  authDomain: "uber-clone-40527.firebaseapp.com",
  projectId: "uber-clone-40527",
  storageBucket: "uber-clone-40527.appspot.com",
  messagingSenderId: "638858630304",
  appId: "1:638858630304:web:8cbddf709fa2624e84e5c5",
  measurementId: "G-WQ5HRKPYFB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { app, provider, auth };
