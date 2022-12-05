import React from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const ChatMessage = (props) => {
    const auth = firebase.auth();
    const {text, uid, createdAt} = props.message; // message: {text, photoUrl, uid, createdAt}

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    const photoURL = uid === auth.currentUser.uid ? auth.currentUser.photoURL : 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236__340.png';

    return (
        <div className={messageClass}>
            <img src={photoURL} alt='avatar'></img>
            <p>{text}</p>
        </div>

    )
}

export default ChatMessage;