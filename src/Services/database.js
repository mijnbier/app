import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCYKSdcBN2zAAkSHtMzUlpH4Px5ZwKzrY0",
  authDomain: "mijn-a4daf.firebaseapp.com",
  databaseURL: "https://mijn-a4daf.firebaseio.com",
  projectId: "mijn-a4daf",
  storageBucket: "mijn-a4daf.appspot.com",
  messagingSenderId: "612444035324",
  appId: "1:612444035324:web:9207151a17b32af37f1f79",
  measurementId: "G-6XY5H5660Y",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;
