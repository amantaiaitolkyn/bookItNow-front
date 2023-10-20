import React, {useState} from "react";
import {Link} from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome
import roomData from "./datas.js"

const Stay = () => {
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
            <div className="date-picker">
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
                    <div className="room-card" key={room.id}>
                        <div className="room-image">
                            <Link to={`/rooms/${room.id}`}><img src={room.image} alt={room.title} /></Link>
                        </div>
                        <div className="room-details">
                            <div className="room-header">
                                <Link to={`/rooms/${room.id}`}><h4 className="link">{room.title}</h4></Link>
                                <p className="price">
                                    ${room.price} / NIGHT
                                </p>
                            </div>
                            <p className="room-size golden">{room.size} / {room.view} / {room.guests} {room.guests === 1 ? 'Guest' : 'Guests'}</p>
                            <ul className="icon">
                                <li><img src='/maximize.png' alt='Maximize' height={20}/>  {room.size}</li>
                                <li><img src='/user.png' alt='User' height={20}/>  {room.guests} {room.guests === 1 ? 'Guest' : 'Guests'}</li>
                                <li><img src='/bed.png' alt='Bed' height={20}/> {room.beds} {room.beds === 1 ? 'Bed' : 'Beds'}</li>
                                <li><img src='/bathtub.png' alt='Bathtub' height={20}/> {room.bathrooms} {room.bathrooms === 1 ? 'Bathroom' : 'Bathrooms'}</li>
                            </ul>
                            <p className="room-size">{room.description}</p>
                            <div className="bottom">
                                <Link to={`/rooms/${room.id}`}><h6>Discover more</h6></Link>
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