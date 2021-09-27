import firebase from 'firebase'
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTgRrdW5J9-CqfrhHzyKZTJTAu0QD9UDk",
  authDomain: "blooms-hut-app.firebaseapp.com",
  projectId: "blooms-hut-app",
  storageBucket: "blooms-hut-app.appspot.com",
  messagingSenderId: "156445474382",
  appId: "1:156445474382:web:e12fc4057ce365993d8d1f"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}
const db = app.firestore()
const auth = firebase.auth()

export {db, auth}
