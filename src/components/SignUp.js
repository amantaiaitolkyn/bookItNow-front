import React, { useState } from 'react';
import './Login.css';

function SignUp() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');



    return (
        <div className="container">
            <div className="header">
                <div className="text">Sign Up</div>
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
                <button type="button">Sign Up</button>
            </div>

        </div>
    );
}

export default SignUp;
