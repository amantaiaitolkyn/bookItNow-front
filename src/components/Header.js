import React, { useState } from "react";

import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";

export default function Header(){
    const [nav, setNav] = useState(false);
    return (
        <header>
            <div className='logo'>
                <img src="/logo4.png" width={80}/>
            </div>
            <div>
                <span className='name'>Book It</span>
                <ul className={nav ? ["menu", "active"].join(' ') : ["menu"]}>
                    <li>
                        <Link to ="home">Home</Link>
                    </li>
                    <li>
                        <Link to ="stay">Stay</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                    <li>
                        <Link to="">Sign in</Link>
                    </li>
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