import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAcbDIIlasGVJTe3jz6gJqLACK4whKIwrE",
	authDomain: "pantry-tracker-6e5ea.firebaseapp.com",
	projectId: "pantry-tracker-6e5ea",
	storageBucket: "pantry-tracker-6e5ea.appspot.com",
	messagingSenderId: "994008426060",
	appId: "1:994008426060:web:4bb6623585d94bfab336e9",
	measurementId: "G-3L0XLL5B1W"
  };
  

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, signInWithPopup };
