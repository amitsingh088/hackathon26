// ------------------ IMPORTS ------------------
import { initializeApp } from "firebase/app";

import {
  getAuth,
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

// ------------------ CONFIG ------------------
const appId = "hackathon-2026"; // fixed value

const firebaseConfig = {
  apiKey: "AIzaSyCnjmFq0F9B3vK9gmVudKIeRGxyNGYltJ8",
  authDomain: "hackathon-99af7.firebaseapp.com",
  projectId: "hackathon-99af7",
  storageBucket: "hackathon-99af7.firebasestorage.app",
  messagingSenderId: "57123565113",
  appId: "1:57123565113:web:fc023e9cc28b1b06ee27e8",
};

// ------------------ INITIALIZE ------------------
let app, auth, db;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  setLogLevel("debug");
} catch (e) {
  console.error("Firebase init error:", e);
}

// ------------------ CONSTANTS ------------------
const HACKATHON_NAME = "Hackathon 2026";
const REGISTRATION_FEE = 2000;
const MAX_TEAM_MEMBERS = 3;

// ------------------ PATH FUNCTIONS ------------------
const getTeamCollectionPath = () => `/artifacts/${appId}/public/data/teams`;
const getTeamDocPath = (teamId) =>
  `/artifacts/${appId}/public/data/teams/${teamId}`;

const getUserCollectionPath = () => `/artifacts/${appId}/public/data/users`;
const getUserDocPath = (userId) =>
  `/artifacts/${appId}/public/data/users/${userId}`;

const getR1MCQSubmissionsPath = (teamId) =>
  `/artifacts/${appId}/public/data/r1_mcq_submissions/${teamId}`;

const getR1CodeSubmissionsPath = (teamId) =>
  `/artifacts/${appId}/public/data/r1_code_submissions/${teamId}`;

const getR2SubmissionsPath = (teamId) =>
  `/artifacts/${appId}/public/data/r2_submissions/${teamId}`;

const getConfigDocPath = () =>
  `/artifacts/${appId}/public/data/config/hackathon`;
const getRoundConfigDocPath = () =>
  `/artifacts/${appId}/public/data/config/rounds`;

// ------------------ EXPORTS ------------------
export {
  // Firebase Instances
  auth,
  db,

  // App constants
  HACKATHON_NAME,
  REGISTRATION_FEE,
  MAX_TEAM_MEMBERS,

  // Firebase functions
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

  // Auth
  signInAnonymously,
  signInWithCustomToken,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,

  // Paths
  getTeamCollectionPath,
  getTeamDocPath,
  getUserCollectionPath,
  getUserDocPath,
  getR1MCQSubmissionsPath,
  getR1CodeSubmissionsPath,
  getR2SubmissionsPath,
  getConfigDocPath,
  getRoundConfigDocPath,
};
