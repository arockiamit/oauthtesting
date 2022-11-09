import { initializeApp } from "firebase/app";
import firebase from 'firebase/app'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBE6Q5a3vFSSWkhdpo_hK7xY44Ldgitn5k",
    authDomain: "safty-app-people.firebaseapp.com",
    projectId: "safty-app-people",
    storageBucket: "safty-app-people.appspot.com",
    messagingSenderId: "10646818122",
    appId: "1:10646818122:web:be6e7bb40fd354fd1885b3"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export default app