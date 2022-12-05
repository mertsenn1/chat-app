import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // config
  apiKey: "AIzaSyCRdCzumiAiLEJyiyPaWxRKg9E8b9KCQh4",
  authDomain: "instant-messaging-app-d630e.firebaseapp.com",
  projectId: "instant-messaging-app-d630e",
  storageBucket: "instant-messaging-app-d630e.appspot.com",
  messagingSenderId: "327265615493",
  appId: "1:327265615493:web:8cc5d77ef95cccced6f3ec",
  measurementId: "G-L899EJ7WF5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
