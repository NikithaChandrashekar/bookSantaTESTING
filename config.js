import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyApLn4n1H2qYW-ocWp9LX5-5vKIdFuPDa8",
  authDomain: "booksanta-e3811.firebaseapp.com",
  projectId: "booksanta-e3811",
  storageBucket: "booksanta-e3811.appspot.com",
  messagingSenderId: "377261479243",
  appId: "1:377261479243:web:0bc72171380af2f23744ce",
  measurementId: "G-G3K0E7K8G9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
