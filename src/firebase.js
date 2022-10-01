import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


export const firebaseConfig = {
  apiKey: "AIzaSyAUEcahbJU4Gpwbu-HwvFs-u2oRe9tyq1g",
  authDomain: "netflix-95603.firebaseapp.com",
  projectId: "netflix-95603",
  storageBucket: "netflix-95603.appspot.com",
  messagingSenderId: "1011154922965",
  appId: "1:1011154922965:web:950b62ce905865be64a15c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
