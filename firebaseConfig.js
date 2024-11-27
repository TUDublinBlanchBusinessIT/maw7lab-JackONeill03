import firebase from "firebase";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDsj87DVBUAJcf4mOK3piDmUnjW3gxjGyk",
  database: "https;//maw7lab-jackoneill03.firebaseapp.com",
  authDomain: "maw7lab-jackoneill03.firebaseapp.com",
  projectId: "maw7lab-jackoneill03",
  storageBucket: "maw7lab-jackoneill03.firebasestorage.app",
  messagingSenderId: "605931140210",
  appId: "1:605931140210:web:745547f6513e3a9cf2feeb"
};

const app = initializeApp(firebaseConfig);

if(!firebase.apps.length){
  alert("initialising");
  app = firebase.initializeApp(firebaseConfig);
}
else {
  alert("app length " + firebase.apps.length)
}

const db = firebase.firestore();

export {db};
