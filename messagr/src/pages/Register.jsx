import React from 'react';
import Add from '../img/addAvatar.png';
import Logo from '../img/logo.png';

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {

    const [error, setError] = React.useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password); 
            
            //Create a unique image name
            const date = new Date().getTime();
            const storageRef = ref(storage, `${displayName + date}`);

            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                  try {
                    //Update profile
                    await updateProfile(res.user, {
                      displayName,
                      photoURL: downloadURL,
                    });
                    //create user on firestore
                    await setDoc(doc(db, "users", res.user.uid), {
                      uid: res.user.uid,
                      displayName,
                      email,
                      photoURL: downloadURL,
                    });
        
                    //create empty user chats on firestore
                    await setDoc(doc(db, "userChats", res.user.uid), {});
                    navigate("/");
                  } catch (error) {
                    console.log(error);
                    setError(true);
                  }
                });
              });
        } catch (error) {
            setError(true);
        }          
    };

    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <img className='logoimage' src={Logo} alt="" />
                <div className='title'>Register</div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='name'/>
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='password'/>
                    <input style={{display:"none"}} type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add a picture</span>
                    </label>
                    <button>Sign up</button>
                    {error && <span className='spanwrong'>Something went wrong!</span>}
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>

    )
}

export default Register;