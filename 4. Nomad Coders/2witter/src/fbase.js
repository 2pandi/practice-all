import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

initializeApp(firebaseConfig);

export const authService = getAuth();

export const createUserWithEmailAndPasswordFbase = createUserWithEmailAndPassword;

export const onAuthStateChangedFbase = onAuthStateChanged;

export const signInWithEmailAndPasswordFbase = signInWithEmailAndPassword;

export const googleProvider = GoogleAuthProvider;

export const githubProvider = GithubAuthProvider;

export const signInWithPopupFbase = signInWithPopup;