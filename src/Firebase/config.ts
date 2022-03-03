import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDzHiAAKQNxT5JLerbtFYO7WpggyEJYjc0",
  authDomain: "wheres-waldo-98a63.firebaseapp.com",
  projectId: "wheres-waldo-98a63",
  storageBucket: "wheres-waldo-98a63.appspot.com",
  messagingSenderId: "450897709679",
  appId: "1:450897709679:web:2a092b9e6995ce3df9db9a",
  // measurementId: "G-PLQQFQ6FVM"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore()

export { db }