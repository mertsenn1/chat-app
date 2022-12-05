import React from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const SignOut = () => {
    const auth = firebase.auth();

    const email = auth.currentUser.email;
    return auth.currentUser && (
        <div>
            <div>User Email: {email}</div>
            <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>

    )
}

export default SignOut;