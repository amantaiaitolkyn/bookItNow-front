import React from "react";
import { Link,Outlet } from "react-router-dom";
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
                    <Link to="/"></Link>
                    <Link to="login"><button className="login-button">Log In</button></Link>
                    <Link to="register"><button className="logout-button">Register</button></Link>
                </div>
            </div>
             </div>
        </div>

    )
}