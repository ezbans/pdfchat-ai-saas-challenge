import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCSgpmaV6hUL2iIGV37GOyzBNortSdwY9I",
  authDomain: "chat-with-pdf-dd05f.firebaseapp.com",
  projectId: "chat-with-pdf-dd05f",
  storageBucket: "chat-with-pdf-dd05f.appspot.com",
  messagingSenderId: "329193794186",
  appId: "1:329193794186:web:43db977014c071436b5b73",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
