"use client";

import { initializeApp } from "firebase/app";

import { auth, db } from "../firebase/config";
   // IMPORTANT FIX
import {
  signInAnonymously,
  signInWithCustomToken,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
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
  serverTimestamp,
  setLogLevel,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnjmFq0F9B3vK9gmVudKIeRGxyNGYltJ8",
  authDomain: "hackathon-99af7.firebaseapp.com",
  projectId: "hackathon-99af7",
  storageBucket: "hackathon-99af7.firebasestorage.app",
  messagingSenderId: "57123565113",
  appId: "1:57123565113:web:fc023e9cc28b1b06ee27e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth + Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db,
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
