import React, {useState} from "react";
import bookedRooms from "./RoomDetails"
import Register from "./Register";
import {useBookedRooms} from "../bookedRoomsContext";
function Profile() {
    const { bookedRooms } = useBookedRooms();

    return (
        <div className="user-profile">
            <h2>Profile</h2>
            <h3>Reserved rooms:</h3>
            <ul>
                {bookedRooms.map((bookedRoom, index) => (
                    <li key={index}>
                        {bookedRoom.title} - ${bookedRoom.price} / NIGHT
                    </li>
                ))}

            </ul>
        </div>
    );
}

export default Profile;