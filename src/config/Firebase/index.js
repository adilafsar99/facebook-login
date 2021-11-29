import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore, collection, doc, addDoc, setDoc, updateDoc, getDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIdo-8ubj-2hDCyutANkRtB1ZMCb252jI",
  authDomain: "fir-projects-df679.firebaseapp.com",
  databaseURL: "https://fir-projects-df679-default-rtdb.firebaseio.com",
  projectId: "fir-projects-df679",
  storageBucket: "fir-projects-df679.appspot.com",
  messagingSenderId: "41637280899",
  appId: "1:41637280899:web:c4df451f10b96eba5fefb6"
}

initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
  auth,
  db,
  collection,
  doc,
  addDoc,
  setDoc,
  updateDoc,
  getDoc
};