import React, { useState, useContext } from "react";
import { useBookedRooms } from "../bookedRoomsContext";
import { useAuth } from '../hooks/use-auth';
import { UserContext } from '../UserContext';

import './ChangeInfo.css';

function ChangeInfo() {
    const { userData, updateUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        name: userData.name || '',
        surname: userData.surname || '',
        email: userData.email || '',
        phone_number : userData.phone_number || '',
        country: userData.country || '',
        city : userData.city || '',
    });

    const handleSave = () => {
        updateUser(formData);
        alert("Your datas are saved!")
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    return (
        <>
            <div className="user-info top">
                <h3>User Information</h3>
                <form>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Surname:
                        <input
                            type="text"
                            name="surname"
                            value={formData.surname}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Phone_number:
                        <input
                            type="phone_number"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Country:
                        <input
                            type="country"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        City:
                        <input
                            type="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                        />
                    </label>

                    <button type="button" onClick={handleSave}>
                        Save
                    </button>
                </form>
            </div>
        </>
    );
}

export default ChangeInfo;
