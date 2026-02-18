
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAH03Ki56iKLnKvDi592VZeGWL1RpcuIYE",
  authDomain: "megapari-banners.firebaseapp.com",
  projectId: "megapari-banners",
  storageBucket: "megapari-banners.firebasestorage.app",
  messagingSenderId: "401330094060",
  appId: "1:401330094060:web:54b9a9c627c766c5de0ac9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export { collection, addDoc, getDocs };
