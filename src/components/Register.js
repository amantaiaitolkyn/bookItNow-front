import React, { useState } from 'react';
import './LoginRegister.css';

import { useNavigate } from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useDispatch} from 'react-redux';
import {setUser} from "../store/slices/userSlice";
import { Link } from "react-router-dom";



function Register() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/');
            })
            .catch(console.error)
    }


    return (
        <div className="container">
            <div className="header">
                <div className="text">Register</div>
                <div className="underline"></div>
            </div>
            <form className="inputs">
                <div className="input">
                    <img src="/person-icon.svg" width={30} alt=""/>
                    <input type="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
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

                <button type="button"  onClick={() => handleRegister(email, password)}>Register</button>
            </div>
            <p className="text2">
                Already have an account?  <Link to="/login" className="link"> Log in</Link>
            </p>
        </div>
    );
}

export default Register;