// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: "AIzaSyCDVs6tZSUyBrRwxv8xVwmMT5tYy8HMOYE",
//   authDomain: "careerlink-project.firebaseapp.com",
//   projectId: "careerlink-project",
//   storageBucket: "careerlink-project.firebasestorage.app",
//   messagingSenderId: "188267705495",
//   appId: "1:188267705495:web:ee02eefbf844dc7bb665d2"
// };
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);