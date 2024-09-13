import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth instance
export const auth = getAuth(app);

// firestore instance
export const firestore = getFirestore(app);

// storage instance
export const storage = getStorage(app);

// analytics instance
export const analytics = getAnalytics(app);