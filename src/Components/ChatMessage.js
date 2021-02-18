import React from 'react';

import {auth} from './firebase';


const ChatMessage = (props) => {

    const { text, uid, photoURL } = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
    <>
        <div className={`message ${messageClass}`}>
            <img src={ photoURL || 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Anonymous_emblem.svg'} />
            <p>{text}</p>
        </div>
    </>
    )
}

export default ChatMessage
