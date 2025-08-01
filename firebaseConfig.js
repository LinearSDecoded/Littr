import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // optional
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB7O85U48SfUNFIcADDu5LnnJ8SiezeqBc",
    authDomain: "littr-4658a.firebaseapp.com",
    projectId: "littr-4658a",
    storageBucket: "littr-4658a.firebasestorage.app",
    messagingSenderId: "224538289020",
    appId: "1:224538289020:web:b36a8ba68aed75f1c5baf9",
    measurementId: "G-5XVEBZKG2N"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app); 
