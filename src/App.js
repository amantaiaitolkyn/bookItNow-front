import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import React from 'react';
import { Outlet } from "react-router-dom";
function App() {
    return (
        <div className='wrapper'>
            <hr className="horizontal-line" />
            <Header />
            {/* <Outlet/> */}
        </div>
    );
}

export default App;
