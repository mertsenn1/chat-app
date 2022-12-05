import React from 'react';
import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp( {
  // config
  apiKey: "AIzaSyCRdCzumiAiLEJyiyPaWxRKg9E8b9KCQh4",
  authDomain: "instant-messaging-app-d630e.firebaseapp.com",
  projectId: "instant-messaging-app-d630e",
  storageBucket: "instant-messaging-app-d630e.appspot.com",
  messagingSenderId: "327265615493",
  appId: "1:327265615493:web:8cc5d77ef95cccced6f3ec",
  measurementId: "G-L899EJ7WF5"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth); // null if the user is not signed in.
  return (
    <div className="App">
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
      <section className="App-header">
        <h1>messagR</h1>
      </section>

    </div>
  );
}

export default App;