import React, { useState, useRef } from 'react'
import ChatMessage from './ChatMessage'
import { AiOutlineSend } from 'react-icons/ai';

import firebase from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {auth , firestore} from './firebase';


const ChatRoom = () => {

    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
  
    const [messages] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
  
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
  
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }  

    return (
    <>
        <main>  
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
            <span ref={dummy}></span>
        </main>
        <form onSubmit={sendMessage}>
            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
            <button type="submit" disabled={!formValue}><AiOutlineSend/></button>
        </form>
    </>
    )
}

export default ChatRoom
