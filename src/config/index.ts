import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCV_8LAS5Je_ztKpm4tGBBzw1Nk0ZZ2Usk",
  authDomain: "green-shop-n88.firebaseapp.com",
  projectId: "green-shop-n88",
  storageBucket: "green-shop-n88.firebasestorage.app",
  messagingSenderId: "375626588339",
  appId: "1:375626588339:web:a5b810cf83eb4eb5f5d0c6",
  measurementId: "G-N8398MGWJ4"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export const signInWithGoogle=()=>{
    return signInWithPopup(auth,provider)
}