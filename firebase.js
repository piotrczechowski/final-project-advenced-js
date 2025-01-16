import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",

  authDomain: "energyteam-5fbd4.firebaseapp.com",

  projectId: "energyteam-5fbd4",

  storageBucket: "energyteam-5fbd4.firebasestorage.app",

  messagingSenderId: "176615851977",

  appId: "1:176615851977:web:9bc22eecdf948957544a18",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default firebaseConfig;

//https://console.firebase.google.com/u/0/project/energyteam-5fbd4/overview
