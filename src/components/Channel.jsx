import React, { useDebugValue, useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import Message from './Message';
const Channel = ({user=null, db=null}) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [uid, displayName, photoUrl] = user;
    useEffect(() => {
        if (db){
            const unsubscribe =
            db.collection('messages')
            .orderBy('createdAt')
            .limit(100)
            .onSnapShot(querySnapShot => {
                const data = querySnapShot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                }));
                setMessages(data);
            })
            return unsubscribe;
        }
    }, [db]);

    const handleOnChange = e => {
        setNewMessage(e.target.value);
    }
    const handleOnSubmit = e => {
        e.preventDefault();
        if (db) {
            db.collection('messages').add({
                text: newMessage,
                createdAt: firebase.firestore.fieldValue.serverTimestamp,
                uid,
                displayName,
                photoUrl
            })
        }
     }
    

    return (
        <>
        <div className="messages--container">
            <ul>
                {messages.map(message => (
                    <li key={message.id}>
                        <Message {...message} />
                    </li>
                ))}
            </ul>
            <form onSubmit={handleOnSubmit}>
                <input type="text" value={newMessage} onChange={handleOnChange} placeholder="Type here" />
                    <button type="submit" disabled={!newMessage}>
                        Send
                    </button>
            </form>
        </div>
        </>
    );
};

export default Channel;