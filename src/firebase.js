import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyA4WP26sTCkNOsPHfTWYV1yypQ-6JrUFhk",
  authDomain: "react-slack-clone-e6b28.firebaseapp.com",
  databaseURL: "https://react-slack-clone-e6b28.firebaseio.com",
  projectId: "react-slack-clone-e6b28",
  storageBucket: "react-slack-clone-e6b28.appspot.com",
  messagingSenderId: "921343697113",
  appId: "1:921343697113:web:9c0b06f3a2e6c3c5df5ec8",
  measurementId: "G-N684Y9HDVP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
