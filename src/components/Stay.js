import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome

const roomData = [
    {
        title: "Signature Suite",
        size: "60m²",
        view: "Great Mountain View",
        guests: "4",
        beds: "2",
        bathrooms: "1",
        price: "399",
        description:
            "The south-facing aspect affords unimpeded views of the Alps. Measuring 42 square meters, with traditional Alpine woods, warm fireplaces, and natural-stone touches.",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" // Sample Unsplash image URL
    },
    {
        title: "Deluxe Room",
        size: "35m²",
        view: "Village View",
        guests: "2",
        beds: "1",
        bathrooms: "1",
        price: "199",
        description:
            "The south-facing aspect affords unimpeded views of the Alps. Measuring 42 square meters, with traditional Alpine woods, warm fireplaces, and natural-stone touches.",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" // Sample Unsplash image URL
    }
];

const Stay = () => {
    return (
        <div className="stay">
            <h2>Rooms & Suites</h2>
            <p className="room-sign">Warmth. Care. Peace.</p>
            <div className="date-picker">
                {/* Date picker components go here */}
            </div>
            <div className="room-cards">
                {roomData.map((room, index) => (
                    <div className="room-card" key={index}>
                        <div className="room-image">
                            {/* Add room images here */}
                            <img src={room.image} alt={room.title} />
                        </div>
                        <div className="room-details">
                            <div className="room-header">
                                <h3>{room.title}</h3>
                                <p className="price">
                                    <FontAwesomeIcon icon="dollar-sign" />
                                    {room.price} / NIGHT
                                </p>
                            </div>
                            <p className="room-size">{room.size}</p>
                            <p>{room.view}</p>
                            <p>{room.guests} Guests</p>
                            <p>{room.size} m²</p>
                            <p>{room.beds} Beds</p>
                            <p>{room.bathrooms} Bathrooms</p>
                            <p>{room.description}</p>
                            <button>Discover More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stay;
