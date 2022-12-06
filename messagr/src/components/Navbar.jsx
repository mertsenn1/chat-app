import React, { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';
import Logo from '../img/logo.png';

const Navbar = () => {

    const {currentUser} = useContext(AuthContext)

    return (
        <div className='navbar'>
            <img className='logoimage2' src={Logo} alt="" />
            <div className='user'>
                <img src={currentUser.photoURL} alt=""></img>
                <span>{currentUser.displayName}</span>
                <button onClick={() => {signOut(auth); window.location.reload(false);}}>logout</button>
            </div>
        </div>

    )
}

export default Navbar;