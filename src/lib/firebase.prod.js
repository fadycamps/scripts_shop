import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBdB2k4A-xq4un58cgFWHYJuLKjP0ik7EQ",
  authDomain: "store-408fa.firebaseapp.com",
  projectId: "store-408fa",
  storageBucket: "store-408fa.appspot.com",
  messagingSenderId: "933543066220",
  appId: "1:933543066220:web:8e0a55f9598e29db237649"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
