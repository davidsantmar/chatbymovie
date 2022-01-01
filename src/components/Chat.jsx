import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Channel from './Channel';
import { signInWithPopup } from 'firebase/auth';

firebase.initializeApp({
        apiKey: "AIzaSyACGeRmkHooWiPrv_tAcDCD9RfUOozSylc",
        authDomain: "chatbymovie.firebaseapp.com",
        projectId: "chatbymovie",
        storageBucket: "chatbymovie.appspot.com",
        messagingSenderId: "819100949229",
        appId: "1:819100949229:web:f8768a989c78102cd84ae4",
        measurementId: "G-XF1KZHQJ95"
});

const auth = firebase.auth();
const db = firebase.firestore();

const Chat = () => {
    const [user, setUser] = useState(() => auth.currentUser);
    const [initializing, setInitializing] = useState(true);
    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged(user =>{
            if (user){
                setUser(user);
            }else{
                setUser(null);
            }
            if (initializing){
                setInitializing(false);
            }
        })
        return unsubscribe;
    }, [])

    const signInWithGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.useDeviceLanguage();
        try{
            await signInWithPopup(provider);
        }
        catch(error){
            console.error(error);
        }
    }
    const signOut = async () => {
        try{
            await firebase.auth().signOut();
        }
        catch(error){
            console.log(error.message);
        }
    }

    if (initializing) return "loading...";

    return (
        <div className="chat--container">
            {user ? (
            <> 
                <button onClick={signOut}>Sign Out</button>
                <Channel user={user} db={db} />
            </>
            ):(
                <button onClick={signInWithGoogle}></button>
            )}
        </div>
        
    );
};

export default Chat;