import React, { useState } from "react";

import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";
import NavBar from "./NavBar";
export default function Header(){
    const [nav, setNav] = useState(false);
    return (
        <header>
            <NavBar />
            <div>
                <ul className={nav ? ["menu", "active"].join(' ') : ["menu"]}>
                    <div className="navigation-links">
                        <Link to="home">Home</Link>
                        <Link to="stay">Stay</Link>
                        <Link to="about">About</Link>
                    </div>

                </ul>
                <div onClick={() => setNav(!nav)} className= "mobile_btn">
                    {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu  size={30}/>}
                </div>
            </div>
            <div className='presentation'></div>
            <Outlet/>
        </header>
    )
}