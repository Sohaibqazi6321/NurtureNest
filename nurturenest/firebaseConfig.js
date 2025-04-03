// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqyhsPJp34TThhqCBw7yksgmnc-W0zl7M",
  authDomain: "nurturenest-35a6e.firebaseapp.com",
  projectId: "nurturenest-35a6e",
  storageBucket: "nurturenest-35a6e.firebasestorage.app",
  messagingSenderId: "540912075194",
  appId: "1:540912075194:web:96b359b976e77c53679d83",
  measurementId: "G-QY88LYPC5H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);