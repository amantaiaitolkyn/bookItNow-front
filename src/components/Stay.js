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
        image: "https://cozystay.loftocean.com/mountain-hotel/wp-content/uploads/sites/7/2023/04/img-25-1200x801.jpg"
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
        image: "https://cozystay.loftocean.com/mountain-hotel/wp-content/uploads/sites/7/2023/04/marvin-meyer-fBdlytm6Hp8-unsplash.jpg"
    },
    {
        title: "Double Room",
        size: "25m²",
        view: "Partial Mountain View",
        guests: "2",
        beds: "2",
        bathrooms: "1",
        price: "219",
        description:
            "The south-facing aspect affords unimpeded views of the Alps. Measuring 42 square metres, with traditional Alpine woods, warm fireplaces, and natural-stone touches.",
        image: "https://cozystay.loftocean.com/mountain-hotel/wp-content/uploads/sites/7/2023/04/ralph-ravi-kayden-FqqiAvJejto-unsplash-1200x800.jpg"
    }
];

const Stay = () => {
    return (
        <div className="stay">
            <div className="words">
                <h2>Rooms & Suites</h2>
                <p className="room-sign">Warmth. Care. Peace.</p>
            </div>
            <div className="date-picker">
            </div>
            <div className="room-cards">
                {roomData.map((room, index) => (
                    <div className="room-card" key={index}>
                        <div className="room-image">
                            <img src={room.image} alt={room.title} />
                        </div>
                        <div className="room-details">
                            <div className="room-header">
                                <h4>{room.title}</h4>
                                <p className="price">
                                    ${room.price} / NIGHT
                                </p>
                            </div>
                            <p className="room-size golden">{room.size} / {room.view} / {room.guests} Guests</p>
                            <ul className="icon">
                                <li><img src='/maximize.png' height={20}/>  {room.size}</li>
                                <li><img src='/user.png' height={20}/>  {room.guests} Guests</li>
                                <li><img src='/bed.png' height={20}/> {room.beds} Bed</li>
                                <li><img src='/bathtub.png' height={20}/> {room.bathrooms} Bathroom</li>
                            </ul>
                            <p className="room-size">{room.description}</p>
                            <div className="bottom">
                                <h6>Discover more</h6>
                                <img className='next' src='next.png' height={18}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stay;
