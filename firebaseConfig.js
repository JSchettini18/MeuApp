// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-zGQN7sgVLK06DcobgkgYlLDp_ND4to8",
  authDomain: "meuapp-488dc.firebaseapp.com",
  projectId: "meuapp-488dc",
  storageBucket: "meuapp-488dc.firebasestorage.app",
  messagingSenderId: "192353702548",
  appId: "1:192353702548:web:f7cbdcfc3a0ed8d8255a81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // ✅ PASSA o `app` como argumento

export { auth };