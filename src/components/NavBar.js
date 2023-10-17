import React from "react";
import { Link } from "react-router-dom";
export default function NavBar(){
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/home">
                <div className='logo'>
                    <img src="/logo4.png" width={60}/>
                </div>
                </Link>
                <div>
                    <span className='name'>Book It</span>
                <div className="button-container">
                    <Link to="/login">
                        <button className="login-button">LogIn</button>
                    </Link>
                    <Link to="/signup">
                        <button className="logout-button">Register</button></Link>
                </div>
            </div>
             </div>
        </div>


    )
}