import React, { useState } from "react";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { useAuth } from '../hooks/use-auth';
// import {removeUser} from "../store/slices/userSlice"
export default function Header(){
    const [nav, setNav] = useState(false);
    const {isAuth,email} = useAuth();
    return (
        <header>
            <div className="contact-info">
                <p>RUE DE LAUSANNE, 1202 GENÈVE, SWITZERLAND</p>
                <p>TEL: +41 22 345 67 88</p>
                <p>FAX: +41 22 345 67 89</p>
                <p>Email: <a href="mailto:BOOKING@COZYSTAY.COM">BOOKING@COZYSTAY.COM</a></p>
            </div>
            <hr className="horizontal-line" />
            <NavBar />
            <div>
                <ul className={nav ? ["menu", "active"].join(' ') : ["menu"]}>
                    <div className="navigation-links">
                        <Link to="/"></Link>
                        <Link to="home">Home</Link>
                        <Link to="rooms">Stay</Link>
                        <Link to="about">About</Link>
                    </div>
                    {isAuth && <Link to="/profile"><button className="profile-button">{email}</button></Link>}
                </ul>
                <div onClick={() => setNav(!nav)} className= "mobile_btn">
                    {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu  size={30}/>}
                </div>
            </div>
            <div className='presentation'></div>
        </header>
    )
}