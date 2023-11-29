import React, {useState, useEffect} from "react";
// import Header from "./Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ReservationForm from "./ReservationForm";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { useAuth } from '../hooks/use-auth';
import {removeUser} from '../store/slices/userSlice'


const googleMapsAPIKey = "AIzaSyD5MCvK4Bt-bxFRy_XYBmRPYUhIzgANfb8";

function MapComponent(props) {
    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{lat: props.latitude, lng: props.longitude}}
        >
            <Marker position={{lat: props.latitude, lng: props.longitude}}/>
        </GoogleMap>
    );
}
const WrappedMapComponent = withScriptjs(withGoogleMap(MapComponent));
export default function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {isAuth} = useAuth();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [geolocation, setGeolocation] = useState(null);
    const images = [
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1848&q=80", // Replace with the actual image file paths
        "https://images.unsplash.com/photo-1697222691126-c1be7bde3ac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1848&q=80",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1848&q=80",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change images every 3 seconds (3000 milliseconds)

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setGeolocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            });
        }
        return () => clearInterval(interval);
    }, []);
    React.useLayoutEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, [isAuth, navigate]);
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return  (
        <div className="home">
            <button className="logout-button" onClick={()=> dispatch(removeUser())}>Log out</button>{/*logout*/}
            <div className="home-page">
                <header>
                    <h1>Welcome to the hotel booking system! </h1>
                    <p>Find and book the best hotels for your next adventure.</p>
                </header>
                <ReservationForm/>
            </div>
            <div className="after-header">
                <div className="content">
                    <h2>Find Your Perfect Getaway</h2>
                    <p>Discover incredible hotels and book your dream vacation today.</p>
                </div>
            </div>
            <div className="image-slider">
                <div className="image-slider-container">
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        className="slider-control prev"
                        onClick={prevImage}
                    />
                    <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        className="slider-control next"
                        onClick={nextImage}
                    />
                </div>
            </div>
            {/* Contact Form */}
            <div className="contact-form">
                <h1 className="title">Contact Us</h1>
                <p className="subtitle">Let's Start a Conversation</p>
                <p className="content">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.
                </p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                    ></textarea>
                    <button type="submit">Submit</button>
                </form>

            </div>
            {/* Display the map */}

            {geolocation && (
                <div className="map">
                    <h2>Location Map</h2>
                    <WrappedMapComponent
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${googleMapsAPIKey}`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        latitude={geolocation.latitude}
                        longitude={geolocation.longitude}
                    />
                </div>
            )}

        </div>
    );
}
// <!DOCTYPE html>
// <html>
// <head>
// <meta charset="utf-8" />
//     <title>METANIT.COM</title>
// </head>
// <body>
// <div id="app"></div>
//
// <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
// <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
// <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
// <script type="text/babel">
//
//     function User() {
//     const [name, setName] = React.useState("Tom");
//     const [age, setAge] = React.useState(36);
//
//     React.useEffect(() => {
//     // Изменяем заголовок html-страницы
//     document.title = `Привет ${name}`;
//     console.log("useEffect");
// });
//
//     const changeName = (event) => setName(event.target.value);
//     const changeAge =(event) => setAge(event.target.value);
//
//     return (
//     <div>
//     <h3>Имя: {name}</h3>
// <h3>Возраст: {age}</h3>
//
// <div>
//     <p>Имя: <input type="text" value={name} onChange={changeName} /></p>
//     <p>Возраст: <input type="number" value={age} onChange={changeAge} /></p>
// </div>
// </div>
// );
// }
//
// ReactDOM.createRoot(
// document.getElementById("app")
// )
// .render(
// <User />
// );
// </script>
// </body>
// </html>

// import React, { useState, useEffect } from 'react';
//
// import React, { useState, useEffect } from 'react';
//
// function Example() {
//     const [count, setCount] = useState(0);
//
//     useEffect(() => {
//         document.title = `Вы нажали ${count} раз`;
//     });
//
//     return (
//         <div>
//             <p>Вы нажали {count} раз</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Нажми на меня
//             </button>
//         </div>
//     );
// }

// import { useRef, useLayoutEffect, useState } from 'react';
// import { createPortal } from 'react-dom';
// import TooltipContainer from './TooltipContainer.js';
//
// export default function Tooltip({ children, targetRect }) {
//     const ref = useRef(null);
//     const [tooltipHeight, setTooltipHeight] = useState(0);
//
//     useLayoutEffect(() => {
//         const { height } = ref.current.getBoundingClientRect();
//         setTooltipHeight(height);
//     }, []);
//
//     let tooltipX = 0;
//     let tooltipY = 0;
//     if (targetRect !== null) {
//         tooltipX = targetRect.left;
//         tooltipY = targetRect.top - tooltipHeight;
//         if (tooltipY < 0) {
//             // It doesn't fit above, so place below.
//             tooltipY = targetRect.bottom;
//         }
//     }
//
//     return createPortal(
//         <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
//             {children}
//         </TooltipContainer>,
//         document.body
//     );
// }
