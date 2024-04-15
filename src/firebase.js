import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAM9vYdlVYf2SodjFu2YbUHcJ-RTRGk14Y",
    authDomain: "disney-clone-8bbd1.firebaseapp.com",
    projectId: "disney-clone-8bbd1",
    storageBucket: "disney-clone-8bbd1.appspot.com",
    messagingSenderId: "817790129127",
    appId: "1:817790129127:web:5951f66c8005e145122342"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();