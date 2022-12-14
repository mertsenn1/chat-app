import React from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../img/logo.png';
const Login = () => {

    const [error, setError] = React.useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
           await signInWithEmailAndPassword(auth, email, password);
           navigate("/");
        } catch (error) {
            setError(true)
        }          
    };

    return (
        <div className='formContainer'>
            <div className='formWrapper'>
            <img className='logoimage' src={Logo} alt="" />
                <div className='title'>Login</div>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='password'/>
                    <button>Login</button>
                    {error && <span className='spanwrong'>Something went wrong!</span>}
                </form>
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>

    )
}

export default Login;