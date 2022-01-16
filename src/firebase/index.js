import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyACGeRmkHooWiPrv_tAcDCD9RfUOozSylc",
    authDomain: "chatbymovie.firebaseapp.com",
    projectId: "chatbymovie",
    storageBucket: "chatbymovie.appspot.com",
    messagingSenderId: "819100949229",
    appId: "1:819100949229:web:f8768a989c78102cd84ae4",
    measurementId: "G-XF1KZHQJ95"
};

firebase.initializeApp(firebaseConfig);
export const authentication = firebase;
export const db = firebase.firestore();