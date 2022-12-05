import React from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const SignIn = () => {
    const auth = firebase.auth();

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <div>
            <div>This is SignIn component !</div>
            <button onClick={signInWithGoogle}> Sign in with Google</button>
        </div>

    )
}

export default SignIn;