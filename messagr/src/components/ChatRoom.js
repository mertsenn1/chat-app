import React from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import SignOut from './SignOut';

const ChatRoom = () => {
    const auth = firebase.auth();
    
    return (
        <div>
            <div>This is ChatRoom component !</div>
            <SignOut />
        </div>

    )
}

export default ChatRoom;