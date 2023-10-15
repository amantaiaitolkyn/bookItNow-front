import React, {useState, useEffect} from "react";
import Header from "./Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
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

        return () => clearInterval(interval);
    }, []);
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };
    return (
        <div className="home">
            <div className="home-page">
                <header>
                    <h1>Welcome to the hotel booking system!</h1>
                    <p>Find and book the best hotels for your next adventure.</p>
                </header>
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
        </div>
    );
}
