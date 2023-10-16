<<<<<<< HEAD
=======

>>>>>>> origin/master
import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => {
        // код для аутентификации пользователя, например отправить данные на сервер.
    }

    return (
        <div className="container">
            <div className="header">
                <div className="text">Sign In</div>
                <div className="underline"></div>
            </div>
<<<<<<< HEAD
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
                <button type="button" onClick={handleLogin}>Sign In</button>
            </div>
=======
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
                    <button type="button" onClick={handleLogin}>Sign In</button>
                </div>
>>>>>>> origin/master

        </div>
    );
}

<<<<<<< HEAD
export default Login;
=======
export default Login;

>>>>>>> origin/master
