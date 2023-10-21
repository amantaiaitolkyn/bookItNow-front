import './RoomDetails.css';
import React from "react";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import roomData from "./datas.js"
import {useBookedRooms} from "../bookedRoomsContext";

function fetchRoomDetailsById(id) {
    return roomData.find((room) => room.id === id);
}

const RoomDetail = () => {
    const { id } = useParams();
    const room = fetchRoomDetailsById(parseInt(id));
    const { addToBookedRooms } = useBookedRooms();
    const [isReserved, setReserved] = useState(false);

    const handleReserveNow = () => {
        addToBookedRooms(room);
        setReserved(true);
    };
    return (
        <><div className="room-image1">
            <img src={room.image} alt={room.title} />
        </div>

            <div className='info1'>
                <div className='room-card1'>
                    <div className="room-details1">
                        <div className="room-header1">
                            <h4>{room.title}</h4>
                        </div>
                        <p className="room-size1 golden1">{room.size} / {room.view} / {room.guests} {room.guests === 1 ? 'Guest' : 'Guests'}</p>
                        <ul className="icon1">
                            <li><img src='/maximize.png' alt='Maximize' height={20} />  {room.size}</li>
                            <li><img src='/user.png' alt='User' height={20} />  {room.guests} {room.guests === 1 ? 'Guest' : 'Guests'}</li>
                            <li><img src='/bed.png' alt='Bed' height={20} /> {room.beds} {room.beds === 1 ? 'Bed' : 'Beds'}</li>
                            <li><img src='/bathtub.png' alt='Bathtub' height={20} /> {room.bathrooms} {room.bathrooms === 1 ? 'Bathroom' : 'Bathrooms'}</li>
                        </ul>
                        <p className="room-size1">{room.desc}</p>
                        <div className='room-header1'>
                            <h4 className='family1'>Family-friendly Amenties</h4>
                        </div>
                        <ul className='icon1'>
                            <li className='family-friendly'><img src='/swimming-pool.png' alt='Swimming-pool' height={35} />Kids Swimming Pool</li>
                            <li className='family-friendly'><img src='/baby-crib.png' alt='Baby-crib' height={35} />Extra Beds/Baby Crib</li>
                            <li className='family-friendly'><img src='/fridge.png' alt='Fridge' height={35} />Washing Machine</li>
                        </ul>
                        <div className='room-header1'>
                            <h4 className='family'>What’s included in this suite?</h4>
                        </div>
                        <ul className='icon2'>
                            <li className='s'><img src='/rhombus.png' alt="Rhombus" height={10} />Private balcony</li>
                            <li className=''><img src='/rhombus.png' alt="Rhombus" height={10} />140x200 cm Elite bed</li>
                            <li className=''><img src='/rhombus.png' alt="Rhombus" height={10} />Upholstered seat beside the panoramic window</li>
                            <li className=''><img src='/rhombus.png' alt="Rhombus" height={10} />TV-UHD screen for watching mountaineering films</li>
                            <li className=''><img src='/rhombus.png' alt="Rhombus" height={10} />Writing desk with USB ports for documenting your adventures</li>
                            <li className=''><img src='/rhombus.png' alt="Rhombus" height={10} />Room safe for your top mountain photos</li>
                            <li className=''><img src='/rhombus.png' alt="Rhombus" height={10} />Service station with Lavazza coffee machine, kettle and tea</li>
                            <li className=''><img src='/rhombus.png' alt="Rhombus" height={10} />Bathroom with rain shower</li>
                            <li className=''><img src='/rhombus.png' alt="Rhombus" height={10} />Comfortable terry towels and bathrobes</li>
                        </ul>
                        <p>
                            Price: <span className="price1">${room.price} / NIGHT</span>
                        </p>
                    </div>
                    {!isReserved && <button className='reserve1' onClick={handleReserveNow}>Reserve now</button>}
                </div>
            </div>
        </>
    );
}

export default RoomDetail;