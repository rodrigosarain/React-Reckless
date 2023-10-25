import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAdjb_A708hpjDckbFETwfoaERB5bb0yIA",
  authDomain: "reckless-love-ee826.firebaseapp.com",
  projectId: "reckless-love-ee826",
  storageBucket: "reckless-love-ee826.appspot.com",
  messagingSenderId: "1070443962117",
  appId: "1:1070443962117:web:11f8cf8376fa44a5d6616c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
