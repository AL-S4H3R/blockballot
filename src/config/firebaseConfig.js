import firebase from 'firebase/app'

var firebaseConfig = {
    apiKey: "AIzaSyAfqrQKvZj6L29sdia3yRLLs4KCiP0yvbE",
    authDomain: "blockballot-606e0.firebaseapp.com",
    projectId: "blockballot-606e0",
    storageBucket: "blockballot-606e0.appspot.com",
    messagingSenderId: "393731957478",
    appId: "1:393731957478:web:6e335373cbefe97e275127",
    measurementId: "G-7LD9YQR8M6"
  };
  // Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
