import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5rCQSc2U3SDj92g07YNQHWS-nS7ktuWM",
  authDomain: "proyecto-react-3e423.firebaseapp.com",
  projectId: "proyecto-react-3e423",
  storageBucket: "proyecto-react-3e423.firebasestorage.app",
  messagingSenderId: "284522120514",
  appId: "1:284522120514:web:96e71fd0b8d877d9f6f4db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exportar auth y provider de Google
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Firestore
const db = getFirestore(app);

export { auth, googleProvider, db, signOut };