
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDnYRfeO3JEg00q2VfQZs2sWwsVAVRTyJs",
    authDomain: "ecommerce-44718.firebaseapp.com",
    projectId: "ecommerce-44718",
    storageBucket: "ecommerce-44718.firebasestorage.app",
    messagingSenderId: "298861616420",
    appId: "1:298861616420:web:3fcec7d050d781406da7b1"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);