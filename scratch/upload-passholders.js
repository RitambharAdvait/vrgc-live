/**
 * Script to upload or manage Samvitya Passholders in vrgc-form Firestore
 * 
 * Usage:
 *   node scratch/upload-passholders.js
 */

const { initializeApp } = require("firebase/app");
const { getFirestore, doc, setDoc } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyANu9lQsIX2JXGoViJ_Oag66Cltd0YzXI0",
  authDomain: "vrgc-form.firebaseapp.com",
  projectId: "vrgc-form",
  storageBucket: "vrgc-form.firebasestorage.app",
  messagingSenderId: "830392164988",
  appId: "1:830392164988:web:9613ae484e4ab64d281ff9",
  measurementId: "G-F24JMF4K6Q"
};

const app = initializeApp(firebaseConfig, "vrgc-uploader");
const db = getFirestore(app);

// Edit or add passholder records here:
const passholders = [
  {
    email: "abhinav.sharma2023@vitbhopal.ac.in",
    name: "Abhinav Sharma",
    regNumber: "23BCE10001",
    vtopTransactionId: "VTOP-SMV-2026-001",
    passType: "VIP_ALL_ACCESS"
  },
  // Add more entries as needed:
  // {
  //   email: "student@vitbhopal.ac.in",
  //   name: "Student Name",
  //   regNumber: "23BCE10002",
  //   vtopTransactionId: "VTOP-SMV-2026-002",
  //   passType: "SAMVITYA_FEST_PASS"
  // }
];

async function uploadPassholders() {
  console.log(`Starting upload of ${passholders.length} passholder(s) to vrgc-form Firestore...`);

  for (const p of passholders) {
    const cleanEmail = p.email.trim().toLowerCase();
    const docId = cleanEmail.replace(/[^a-zA-Z0-9]/g, "_");

    const record = {
      email: cleanEmail,
      name: p.name || "Participant",
      regNumber: (p.regNumber || "").toUpperCase(),
      vtopTransactionId: p.vtopTransactionId || "VTOP-VERIFIED",
      passType: p.passType || "SAMVITYA_FEST_PASS",
      updatedAt: new Date().toISOString()
    };

    try {
      await setDoc(doc(db, "samvitya_passholders", docId), record, { merge: true });
      console.log(`✅ Uploaded: ${record.email} (${record.name})`);
    } catch (err) {
      console.error(`❌ Failed to upload ${record.email}:`, err.message);
    }
  }

  console.log("\nFinished uploading passholders!");
}

uploadPassholders().then(() => process.exit(0)).catch(console.error);
