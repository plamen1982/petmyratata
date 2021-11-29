import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


const firebaseConfig = {

    apiKey: "AIzaSyCEAVBnedkeZ4HjrKTOptylFT-4GVkRLQw",
  
    authDomain: "petmyratata.firebaseapp.com",
  
    projectId: "petmyratata",
  
    storageBucket: "petmyratata.appspot.com",
  
    messagingSenderId: "1083576767085",
  
    appId: "1:1083576767085:web:67e5fa458e31b55f342564",
  
    measurementId: "G-H8HMRBDL2B"
  
  };

  const app = firebase.initializeApp(firebaseConfig);

  export default app;
  