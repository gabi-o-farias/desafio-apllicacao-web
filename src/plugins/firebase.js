import vue from 'vue';
import firebase from "firebase";
import store from "../store";

var firebaseConfig = {
    apiKey: "AIzaSyCzYSGFeA-rKr_0Txv8mFpeSItVfkXdmEQ",
    authDomain: "desafio-aplicacao-web.firebaseapp.com",
    projectId: "desafio-aplicacao-web",
    storageBucket: "desafio-aplicacao-web.appspot.com",
    messagingSenderId: "664594340239",
    appId: "1:664594340239:web:bf652a6ea5980a650293fa",
    measurementId: "G-ST0EVM6T4E"
  };

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("addUser", { name: user.displayName, email: user.email });
});