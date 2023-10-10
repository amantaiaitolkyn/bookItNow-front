import React, { useState } from "react";

import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

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
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Stay</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Sign in</a>
                    </li>
                </ul>
                <div onClick={() => setNav(!nav)} className= "mobile_btn">
                    {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu  size={30}/>}
                </div>
            </div>
            <div className='presentation'></div>
        </header>
    )
}