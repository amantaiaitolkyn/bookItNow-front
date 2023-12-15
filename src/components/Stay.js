import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';
import roomData from "./datas.js"
import {useBookedRooms} from "../bookedRoomsContext";

const Stay = () => {
    const {bookedRooms, addToBookedRooms } = useBookedRooms();
    const [rooms, setRooms] = useState(roomData);
    const navigate = useNavigate();
    const {isAuth} = useAuth();
    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, [isAuth, navigate]);
    const [filters, setFilters] = useState({
        minPrice: 0,
        maxPrice: 999,
    });
    const [searchTerm, setSearchTerm] = useState("");
    const [priceError, setPriceError] = useState("");


    const filteredRooms = rooms.filter(room => {
        const isRoomReserved = bookedRooms.some(bookedRoom => bookedRoom.id === room.id);

        return (
            !isRoomReserved &&
            room.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            !isNaN(filters.minPrice) && !isNaN(filters.maxPrice) &&
            parseFloat(room.price) >= filters.minPrice && parseFloat(room.price) <= filters.maxPrice
        );
    });

    const handleReserve = (roomId) => {
        // Find the room by its ID and update the isReserved property
        const updatedRooms = rooms.map(room =>
            room.id === roomId ? { ...room, isReserved: true } : room
        );
        const roomToBook = rooms.find(room => room.id === roomId);
        addToBookedRooms(roomToBook)
        // Update state with the modified rooms data
        setRooms(updatedRooms);
        alert("The room is reserved")
    };



    const handleClearFilters = () => {
        setFilters({
            minPrice: 0,
            maxPrice: 999,
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
                {filteredRooms
                    .filter(room => !room.isReserved || bookedRooms.some(bookedRoom => bookedRoom.id === room.id))
                    .map((room, index) => (
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
                            {!room.isReserved && (
                                <button className='reserve1' onClick={() => handleReserve(room.id)}>Reserve now</button>
                            )}
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