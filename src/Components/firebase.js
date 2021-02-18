
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



firebase.initializeApp({
  apiKey: "AIzaSyAKEZf67Q5omo2G_KZHuZp3ak514kCxRRo",
  authDomain: "let-stalk-c619c.firebaseapp.com",
  projectId: "let-stalk-c619c",
  storageBucket: "let-stalk-c619c.appspot.com",
  messagingSenderId: "52585132477",
  appId: "1:52585132477:web:a6d00aae0f9bad7558a2d4",
  measurementId: "G-0KE25090VS"
  })
  
  const auth = firebase.auth();
  const firestore = firebase.firestore();
 
  export {auth , firestore}