// About.js

// About.js

import React from "react";
import Footer from "./Footer";

const About = () => {
    return (
        <div className="about">
            <div className="about-container">
                <h2>ABOUT THE HOTEL</h2>
                <p>
                    Welcome to CozyStay, a boutique resort in the heart of the Swiss Alps.
                </p>
                <p>
                    SWISS HERITAGE MEETS MODERN LUXURY
                    CozyStay in the heart of the mountains is an architectural masterpiece offering contemporary accommodations with unrivaled ski and hiking trails.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
            </div>
            <div className="video-container">
                {/* Add your video iframe here */}
                <iframe
                    title="Hotel Video"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/cmfeMfdYRFs"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>

            </div>
        </div>
    );
};

export default About;