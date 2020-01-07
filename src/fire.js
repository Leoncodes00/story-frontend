import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCXWInNVMHmdL70jYHOCxZpqMia8pe9x1Y",
  authDomain: "fir-with-react-38a5e.firebaseapp.com",
  databaseURL: "https://fir-with-react-38a5e.firebaseio.com",
  projectId: "fir-with-react-38a5e",
  storageBucket: "fir-with-react-38a5e.appspot.com",
  messagingSenderId: "526971831445",
  appId: "1:526971831445:web:ecdabb18e74874d4d5079c",
  measurementId: "G-WSKY90FW24"
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
