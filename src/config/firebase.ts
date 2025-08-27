// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAC7kuOiRj6EZAtr18W4Dkk6gQ9RAPA9A",
  authDomain: "upward-fd63d.firebaseapp.com",
  projectId: "upward-fd63d",
  storageBucket: "upward-fd63d.firebasestorage.app",
  messagingSenderId: "552926055931",
  appId: "1:552926055931:web:d2d0763eee85b5fb698f5e",
  measurementId: "G-8PZ8F1Y6K4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Storage
export const storage = getStorage(app);

// Initialize Analytics (optional)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app;