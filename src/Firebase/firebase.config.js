// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm4QLisAzHBiEglR_Q-3Xc4dkvpXms88I",
  authDomain: "dragon-news-6cc3e.firebaseapp.com",
  projectId: "dragon-news-6cc3e",
  storageBucket: "dragon-news-6cc3e.firebasestorage.app",
  messagingSenderId: "297450261163",
  appId: "1:297450261163:web:307f35b92f456f699045ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;