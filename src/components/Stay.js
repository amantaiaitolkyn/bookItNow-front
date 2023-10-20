import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../hooks/use-auth';
import {useDispatch} from "react-redux";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome

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
    const navigate = useNavigate();
    const {isAuth} = useAuth();
    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, [isAuth, navigate]);
    const [filters, setFilters] = useState({
        minPrice: 0,
        maxPrice: 999, // Set your maximum price limit
    });
    const [searchTerm, setSearchTerm] = useState("");
    const [priceError, setPriceError] = useState("");


    const filteredRooms = roomData.filter((room) => {
        return (
            (room.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (!isNaN(filters.minPrice) && !isNaN(filters.maxPrice) && parseFloat(room.price) >= filters.minPrice && parseFloat(room.price) <= filters.maxPrice)
        );
    });
    const handleClearFilters = () => {
        setFilters({
            minPrice: 0,
            maxPrice: 999, // Set your maximum price limit
        });
        setSearchTerm("");
    };
    return (
        <div className="stay">
            <div className="words">
                <h2>Rooms & Suites</h2>
                <p className="room-sign">Warmth. Care. Peace.</p>
            </div>
            <div className="date-picker" id="room-list">
                <div className="search-form">
                    <h3>Search Rooms</h3>
                    <form>
                        <input
                            type="text"
                            placeholder="Search by room name or type"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </form>
                </div>
                <div className="filter-form">
                    <h3>Filter by Price</h3>
                    <form>
                        <input
                            type="number"
                            placeholder="Min Price"
                            value={filters.minPrice}
                            onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                        />
                        <input
                            type="number"
                            placeholder="Max Price"
                            value={filters.maxPrice}
                            onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                        />
                    </form>
                </div>
                <button className="but" onClick={handleClearFilters}>Clear Filters</button>
            </div>
            <div className="room-cards">
                {filteredRooms.map((room, index) => (
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
                                <li><img src='/maximize.png' alt='Maximize' height={20}/>  {room.size}</li>
                                <li><img src='/user.png' alt='User' height={20}/>  {room.guests} Guests</li>
                                <li><img src='/bed.png' alt='Bed' height={20}/> {room.beds} Bed</li>
                                <li><img src='/bathtub.png' alt='Bathtub' height={20}/> {room.bathrooms} Bathroom</li>
                            </ul>
                            <p className="room-size">{room.description}</p>
                            <div className="bottom">
                                <h6>Discover more</h6>
                                <img className='next' src='/next.png' alt='Next' height={18}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Stay;
