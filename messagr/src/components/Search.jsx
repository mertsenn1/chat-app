import React, { useContext } from 'react';

import {
    collection,
    query,
    where,
    getDocs,
    setDoc,
    doc,
    updateDoc,
    serverTimestamp,
    getDoc,
  } from "firebase/firestore";
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const Search = () => {
    const [username, setUsername] = React.useState("");
    const [user, setUser] = React.useState(null);
    const [error, setError] = React.useState(false);

    const {currentUser} = useContext(AuthContext);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleSearch = async () => {
        // create a query
        const q = query(collection(db, "users"), where("displayName", "==", username ));

        try {
            // execute the query
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            setUser(doc.data());
        });
        } catch (error) {
            setError(true);
        }

    };

    const handleKey = (e) => {
        e.code === "Enter" && handleSearch();
    };

    const handleSelect = async () => {
        const idCombined = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;

        try {
            const res = await getDoc(doc(db, "chats", idCombined));
            
            if (!res.exists()) {
                await setDoc(doc(db, "chats", idCombined), {messages : []})

                await updateDoc(doc(db, "userChats", currentUser.uid), {
                    [idCombined + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    },
                    [idCombined + ".date"]: serverTimestamp()
                });

                await updateDoc(doc(db, "userChats", user.uid), {
                    [idCombined + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL
                    },
                    [idCombined + ".date"]: serverTimestamp()
                });
                
                
            }
        } catch (error) {
            
        }

        setUser(null);
        setUsername("");
    };

    return (
        <div className='search'>
            <div className='searchForm'>
                <input type='text' placeholder='find a user' onKeyDown={handleKey} onChange={handleUsernameChange} value={username}/>
            </div>
            {error && <span>User not found!</span>}
            {user && (<div className='userChat' onClick={handleSelect}>
                <img src={user.photoURL} alt='' />
                <div className='userChatInfo'>
                    <span>{user.displayName}</span>
                </div>
            </div>)}
            
        </div>

    )
}

export default Search;