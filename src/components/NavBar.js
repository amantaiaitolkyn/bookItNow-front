import React from "react";
import { Link } from "react-router-dom";
export default function NavBar(){
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/home">
                <div className='logo'>
                    <img src="/logo4.png" width={60} alt=""/>
                </div>
                </Link>
                <div>
                    <span className='name'>Book It</span>
            </div>
             </div>
        </div>


    )
}