import React, { useState } from 'react';
import './LoginRegister.css';
import {useDispatch} from 'react-redux';
// import {setUser} from "../store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {setUser} from "../store/slices/userSlice";
import { Link } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/home');
            })
            .catch((error) => {
            console.error('Error signing in:', error);
            });
    }

    return (
        <div className="container">
            <div className="header">
                <div className="text">Sign In</div>
                <div className="underline"></div>
            </div>
            <form className="inputs">
                <div className="input">
                    <img src="/email-icon.svg" width={30} alt=""/>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input">
                    <img src="/passwor-icon.svg" width={30} alt=""/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </form>
            <div className="submit-container">
                <button type="button" onClick={() => handleLogin(email, password)}>Sign In</button>

            </div>
            <p className="text2">Or <Link to="/register" className="link"> Register </Link></p>
        </div>
    );
}

export default Login;