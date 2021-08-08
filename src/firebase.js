import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBSa6JCIdV0CL07YTPZErBxfoiErQOM4EI",
  authDomain: "groovy-app-85d2d.firebaseapp.com",
  projectId: "groovy-app-85d2d",
  storageBucket: "groovy-app-85d2d.appspot.com",
  messagingSenderId: "543284773121",
  appId: "1:543284773121:web:675ed14f19dbbb84e45b00",
  measurementId: "G-J2ZD34D5SK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
