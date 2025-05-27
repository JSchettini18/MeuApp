import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6UgQWqgX18H4AN0PBlxA2ejhsCi0cv-U",
  authDomain: "meuapp-b5906.firebaseapp.com",
  projectId: "meuapp-b5906",
  storageBucket: "meuapp-b5906.firebasestorage.app",
  messagingSenderId: "254082378081",
  appId: "1:254082378081:web:849feaa969ffe9bb77bd20",
  measurementId: "G-DQ723D5FFE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }