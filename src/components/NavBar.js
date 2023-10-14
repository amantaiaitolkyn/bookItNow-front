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
                    <button className="login-button">Log In</button>
                    <button className="logout-button">Log Out</button>
                </div>
            </div>
             </div>
        </div>
    )
}