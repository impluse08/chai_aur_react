// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs
} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCKc8N9n8YBXY7hPMLZssKvm4T7Rk6Yy78",
    authDomain: "testing-firebase-e8053.firebaseapp.com",
    projectId: "testing-firebase-e8053",
    storageBucket: "testing-firebase-e8053.appspot.com",
    messagingSenderId: "437419492397",
    appId: "1:437419492397:web:7666af085f03a8581664a4",
    measurementId: "G-KN3SBC0XL4"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore()
const colRef = collection(db, 'books')
getDocs(colRef)
.then((snapshot) => {
  console.log(snapshot.docs);
})
export default auth;

