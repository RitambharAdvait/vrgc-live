import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// ── vrgc-main (primary app) ───────────────────────────────────────
const fallbackMainConfig = {
  apiKey: "AIzaSyBAJjBmiYGqS5yLDMbTwrs0Br6nZEArx18",
  authDomain: "vrgc-main.firebaseapp.com",
  projectId: "vrgc-main",
  storageBucket: "vrgc-main.firebasestorage.app",
  messagingSenderId: "751251886223",
  appId: "1:751251886223:web:1fcf7fc24cb1b67a9460fa",
  measurementId: "G-8GMKNN7PE1",
};

const mainConfig = {
  apiKey: process.env.NEXT_PUBLIC_MAIN_FIREBASE_API_KEY || fallbackMainConfig.apiKey,
  authDomain: process.env.NEXT_PUBLIC_MAIN_FIREBASE_AUTH_DOMAIN || fallbackMainConfig.authDomain,
  projectId: process.env.NEXT_PUBLIC_MAIN_FIREBASE_PROJECT_ID || fallbackMainConfig.projectId,
  storageBucket: process.env.NEXT_PUBLIC_MAIN_FIREBASE_STORAGE_BUCKET || fallbackMainConfig.storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_MAIN_FIREBASE_MESSAGING_SENDER_ID || fallbackMainConfig.messagingSenderId,
  appId: process.env.NEXT_PUBLIC_MAIN_FIREBASE_APP_ID || fallbackMainConfig.appId,
  measurementId: process.env.NEXT_PUBLIC_MAIN_FIREBASE_MEASUREMENT_ID || fallbackMainConfig.measurementId,
};

const app = !getApps().length
  ? initializeApp(mainConfig)
  : getApp();
const db = getFirestore(app);

// ── vrgc-form (real member registrations, Samvitya passholders & live broadcast engine) ─
const fallbackFormConfig = {
  apiKey: "AIzaSyANu9lQsIX2JXGoViJ_Oag66Cltd0YzXI0",
  authDomain: "vrgc-form.firebaseapp.com",
  projectId: "vrgc-form",
  storageBucket: "vrgc-form.firebasestorage.app",
  messagingSenderId: "830392164988",
  appId: "1:830392164988:web:9613ae484e4ab64d281ff9",
  measurementId: "G-F24JMF4K6Q",
};

const formConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || fallbackFormConfig.apiKey,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || fallbackFormConfig.authDomain,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || fallbackFormConfig.projectId,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || fallbackFormConfig.storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || fallbackFormConfig.messagingSenderId,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || fallbackFormConfig.appId,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || fallbackFormConfig.measurementId,
};

const FORM_APP_NAME = "vrgc-form";
const formApp =
  getApps().find((a) => a.name === FORM_APP_NAME) ??
  initializeApp(formConfig, FORM_APP_NAME);
const formDb = getFirestore(formApp);
const formAuth = getAuth(formApp);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export { app, db, formApp, formDb, formAuth, googleProvider };
