import React, { useState, useContext } from "react";
import { useBookedRooms } from "../bookedRoomsContext";
import { useAuth } from '../hooks/use-auth';
import { UserContext } from '../UserContext';

import './Profile.css';



function Profile() {
    const { userData, updateUser } = useContext(UserContext);
    const { bookedRooms, setBookedRooms } = useBookedRooms();
    const { isAuth, email } = useAuth();
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const [paymentAmount, setPaymentAmount] = useState(0);
    const [selectedRoomIndex, setSelectedRoomIndex] = useState(null);
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

    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handlePayClick = (index) => {
        const totalPayment = calculateTotalPayment(bookedRooms[index]);
        setPaymentAmount(totalPayment);
        setSelectedRoomIndex(index);
        setShowPaymentForm(true);
    };

    const calculateTotalPayment = (bookedRoom) => {
        return bookedRoom.price * 1;
    };

    const handlePaymentSubmit = () => {
        console.log(`Payment of $${paymentAmount} submitted for ${email}`);

        const updatedBookedRooms = [...bookedRooms];
        updatedBookedRooms[selectedRoomIndex].paid = true;
        setBookedRooms(updatedBookedRooms);

        sendPaymentConfirmationEmail(email, bookedRooms[selectedRoomIndex], paymentAmount);

        alert('Payment submitted successfully!');
        setShowPaymentForm(false);
    };

    const sendPaymentConfirmationEmail = async (toEmail, room, totalPayment) => {
        try {
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    to: toEmail,
                    subject: 'Payment Confirmation',
                    text: `Thank you for your payment! You have paid $${totalPayment} for the following room: ${room.title}.`,
                }),
            });

            if (!response.ok) {
                console.error(`Error sending email. Server responded with status ${response.status}`);
                alert('Failed to send email. Please try again.');
                return;
            }

            const result = await response.text();

            try {
                const jsonData = JSON.parse(result);
                console.log(jsonData.message);
            } catch (jsonError) {
                console.error('Error parsing JSON:', jsonError);
                console.log('Server Response:', result);
                alert('Failed to send email. Please try again.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send email. Please try again.');
        }
    };

    const handlePaymentCancel = () => {
        setShowPaymentForm(false);
    };

    return (

        <div className="user-profile top">
            <div className="user-info">
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
            <h3>Reserved rooms:</h3>
            <ul>
                {bookedRooms.map((bookedRoom, index) => (
                    <li key={index}>
                        {bookedRoom.title} - ${bookedRoom.price} / NIGHT
                        {!bookedRoom.paid && (
                            <button onClick={() => handlePayClick(index)}>Pay</button>
                        )}
                    </li>
                ))}
            </ul>

            {/* Payment Form */}
            {showPaymentForm && (
                <div className="payment-form">
                    <h3>Payment Form</h3>
                    <p>Total Amount: ${paymentAmount}</p>
                    <input
                        type="text"
                        placeholder="Card Number"
                        // Add necessary card input fields (expiration date, CVV, etc.)
                    />
                    <button onClick={handlePaymentSubmit}>Submit Payment</button>
                    <button onClick={handlePaymentCancel}>Cancel</button>
                </div>
            )}
        </div>
    );
}

export default Profile;
