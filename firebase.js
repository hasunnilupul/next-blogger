import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth instance
export const auth = getAuth(app);

// firestore instance
export const firestore = getFirestore(app);

// storage instance
export const storage = getStorage(app);