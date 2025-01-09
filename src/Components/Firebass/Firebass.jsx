import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyAqIb7FX6WfdRJawIe8xcUEig1jQpXB3Ek",
  authDomain: "netflix-clone-36fdd.firebaseapp.com",
  projectId: "netflix-clone-36fdd",
  storageBucket: "netflix-clone-36fdd.firebasestorage.app",
  messagingSenderId: "22435364294",
  appId: "1:22435364294:web:04b13027cde4bf0aa4c6c7",
  measurementId: "G-1T59HYRGRQ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const SignUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    // console.log(error);
    toast(error.code);
  }
};

const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    // console.log(error);
    toast(error.code);
  }
};
const Logout = async () => {
  signOut(auth);
};

export { auth, db, SignUp, login, Logout };
