import './App.css'
import { initializeApp } from 'firebase/app'
import {
  getFirestore,collection,getDocs,addDoc,
  deleteDoc,doc,onSnapshot,
  query,where,orderBy,serverTimestamp,
  getDoc, updateDoc
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
// const auth = getAuth(app);
const db = getFirestore()
const colRef = collection(db, 'books')

function firebasels(){
    // getDocs(colRef)
    // .then((snapshot) => {
    // // console.log(snapshot.docs);
    // let books = []
    // snapshot.docs.forEach((doc) => {
    //     books.push({ ...doc.data(), id: doc.id })
    // })
    // console.log(books);
    // })
    // .catch(err => {
    // console.log(err.message);
    // })

    // realtime data
    
    //queries
    const q = query(colRef)

    //Real time data update
    onSnapshot(q, (snapshot) => {
        let books = []
        snapshot.docs.forEach(doc => {
        books.push({ ...doc.data(), id: doc.id})
        })
        console.log(books)
        console.log("hiii");
    })

    //adding documents
    const addBookForm = document.querySelector('.add')
    addBookForm.addEventListener('submit', (e) => {
      e.preventDefault()

      addDoc(colRef, {
          title: addBookForm.title.value,
          author: addBookForm.author.value,
          createdAt: serverTimestamp()
        })
        .then(() => {
          addBookForm.reset()
        })
    })

    // deleting docs
    const deleteBookForm = document.querySelector('.delete')
    deleteBookForm.addEventListener('submit', (e) => {
      e.preventDefault()

      const docRef = doc(db, 'books', deleteBookForm.id.value)

      deleteDoc(docRef)
      .then(() => {
        deleteBookForm.reset()
      })
    })

    //get a single document

    // const docRef = doc(db, 'books','yA2AveLTkYsaOVDAXobl') 
    // getDoc(docRef)
    //   .then((doc) =>{
    //     console.log(doc.data(),doc.id);
    //   })

    // Real time document update
    const docRef = doc(db, 'books','yA2AveLTkYsaOVDAXobl') 
    onSnapshot(docRef, (doc) => {
      console.log(doc.data(), doc.id);
    })

    // updating a document
    const updateForm = document.querySelector('.update')
    updateForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const docRef = doc(db, 'books',updateForm.id.value) 
      updateDoc(docRef, {
        title: 'update title'
      })
      .then(() => {
        updateForm.reset()
      })
    })
}
export default firebasels