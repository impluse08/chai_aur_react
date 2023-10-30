import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc
} from 'firebase/firestore'
function App() {
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
    // console.log(snapshot.docs);
    let books = []
    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id })
    })
    // console.log(books);
  })
  .catch(err => {
    console.log(err.message);
  })

  //adding documents
  const addBookForm = document.querySelector('.add')
  addBookForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(addBookForm.title.value);
  })

  // delete document
  const deleteBookForm = document.querySelector('.delete')
  deleteBookForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
  })


  return (
    <>
      <h1>Getting Started with Firebase 9</h1>

      <h2>Firebase Firestore</h2>

      <form class="add">
        <label for="title">Title:</label>
        <input type="text" name="title" required/>
        <label for="author">Author:</label>
        <input type="text" name="author" required/>
        
        <button>add a new book</button>
      </form>

      <form class="delete">
        <label for="id">Document id:</label>
        <input type="text" name="id" required/>

        <button>delete a book</button>
      </form>

      {/* <script src="bundle.js"></script> */}
    </>
  )
}

export default App
  
    // addDoc(colRef, {
    //   title: addBookForm.title.value,
    //   author: addBookForm.author.value
    // })
    // .then(() => {
    //   addBookForm.reset()
    // })