import Header from "./components/Header";
import Footer from "./components/Footer";
// import Home from "./components/Home";
import React from 'react';
import NavBar from "./components/NavBar";
import {Outlet} from "react-router-dom";
// import { Outlet } from "react-router-dom";
function App() {
    return (
        <>

        <div className='wrapper'>
            {/*<NavBar/>*/}
            <Header />
            {/* <Outlet/> */}
            <Footer />
            {/*<Outlet/>*/}
        </div>
        </>
    );
}

export default App;
