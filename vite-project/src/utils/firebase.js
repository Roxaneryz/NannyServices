import firebase from "firebase/app";
import "firebase/database"; 


const firebaseConfig = {
  apiKey: "AIzaSyCTXUr5PLi15IsCRAQQNrhQy1wvrOpazek",
  authDomain: "nannies-services-bc915.firebaseapp.com",
  databaseURL: "https://nannies-services-bc915-default-rtdb.firebaseio.com",
  projectId: "nannies-services-bc915",
  storageBucket: "nannies-services-bc915.firebasestorage.app",
  messagingSenderId: "1003863127959",
  appId: "1:1003863127959:web:191560d578257e8e9b36d2",
};

// Ініціалізація Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Отримуємо доступ до Realtime Database
const database = firebaseApp.database();

export { database };
