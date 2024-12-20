import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCif4cLOXX7FB3TQDcaH3A4I_CpoXztomo",
  authDomain: "pokemoncards-14756.firebaseapp.com",
  projectId: "pokemoncards-14756",
  storageBucket: "pokemoncards-14756.appspot.com",
  messagingSenderId: "378830456622",
  appId: "1:378830456622:web:b50e31ea17e59a53551cbf",
  measurementId: "G-H3CZ08JJM6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const auth = getAuth(app)



export { storage, auth }