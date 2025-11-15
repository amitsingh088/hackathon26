"use client";

import { initializeApp } from "firebase/app";
import { getAuth, 
         signInAnonymously,
         signInWithCustomToken,
         onAuthStateChanged,
         createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut } from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  collection,
  query,
  where,
  getDocs,
  writeBatch,
  serverTimestamp
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnjmFq0F9B3vK9gmVudKIeRGxyNGYltJ8",
  authDomain: "hackathon-99af7.firebaseapp.com",
  projectId: "hackathon-99af7",
  storageBucket: "hackathon-99af7.firebasestorage.app",
  messagingSenderId: "57123565113",
  appId: "1:57123565113:web:fc023e9cc28b1b06ee27e8"
};

const app = initializeApp(firebaseConfig);

// Auth + Firestore instances
export const auth = getAuth(app);
export const db = getFirestore(app);

// Re-export Firebase functions
export {
  signInAnonymously,
  signInWithCustomToken,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  doc,
  getDoc,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  collection,
  query,
  where,
  getDocs,
  writeBatch,
  serverTimestamp
};
