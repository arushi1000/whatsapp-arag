import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBCkdRm4Lg-cx_uIRI9p0qgm7Dxh9zVTg",
  authDomain: "whatsapp-arag.firebaseapp.com",
  projectId: "whatsapp-arag",
  storageBucket: "whatsapp-arag.appspot.com",
  messagingSenderId: "488743241466",
  appId: "1:488743241466:web:81c6b7562bfac8faf32b43",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
