import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa-6wOFy_SdMUaFP0Cr8i2Z1ouj2TWTbY",
  authDomain: "propconnect-2b852.firebaseapp.com",
  projectId: "propconnect-2b852",
  storageBucket: "propconnect-2b852.appspot.com",
  messagingSenderId: "607657778924",
  appId: "1:607657778924:web:b674afb8cdaf04a9f9cfc9",
  measurementId: "G-MCF6PNESL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app; 