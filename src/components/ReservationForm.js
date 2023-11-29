import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
export default function ReservationForm() {
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [roomNumber, setRoomNumber] = useState("");
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const roomlist= React.createRef();
    const navigateToStayPageAndScroll = () => {
        navigate('/rooms'); // Navigate to the "Stay" page

        // Scroll to the room list section after a short delay to allow the page to render
        setTimeout(() => {
            const roomListSection = document.getElementById('room-list');
            if (roomListSection) {
                roomListSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 500); // Adjust the delay as needed
    };

    useEffect(() => {
        let timer;
        if (isSubmitted) {
            timer = setTimeout(() => {
                setIsSubmitted(false);
            }, 3000); // 3 seconds
        }
        return () => {
            clearTimeout(timer);
        };
    }, [isSubmitted]);
    const handleCheckInChange = (e) => {
        setCheckIn(e.target.value);
    };

    const handleCheckOutChange = (e) => {
        setCheckOut(e.target.value);
    };

    const handleRoomNumberChange = (e) => {
        setRoomNumber(e.target.value);
    };

    const handleAdultsChange = (e) => {
        setAdults(e.target.value);
    };

    const handleChildrenChange = (e) => {
        setChildren(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your reservation submission logic here

        // Clear form fields
        setCheckIn("");
        setCheckOut("");
        setRoomNumber("");
        setAdults(1);
        setChildren(0);

        // Show success message
        setIsSubmitted(true);
    };

    return (
        <div className="reservation-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <div className="col">
                        <label htmlFor="checkIn">Check-in Date</label>
                        <input
                            type="date"
                            id="checkIn"
                            value={checkIn}
                            onChange={handleCheckInChange}
                            required
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="checkOut">Check-out Date</label>
                        <input
                            type="date"
                            id="checkOut"
                            value={checkOut}
                            onChange={handleCheckOutChange}
                            required
                        />
                    </div>
                    <div className="col">
                        <label className="roomNumber">Room Number</label>
                        <input
                            type="text"
                            id="roomNumber"
                            value={roomNumber}
                            onChange={handleRoomNumberChange}
                            required
                        />
                    </div>
                    <div className="col"  ref={roomlist}>
                        <label htmlFor="adults">Number of Adults</label>
                        <input
                            type="number"
                            id="adults"
                            value={adults}
                            onChange={handleAdultsChange}
                            min="1"
                            required
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="children">Number of Children</label>
                        <input
                            type="number"
                            id="children"
                            value={children}
                            onChange={handleChildrenChange}
                            min="0"
                            required
                        />
                    </div>
                    <button className="but"  onClick={navigateToStayPageAndScroll} type="submit">Submit Reservation</button>
                </div>
            </form>
            <div className="col">
                {isSubmitted && (
                    <div className="success-message">
                        Reservation Successful!
                    </div>
                )}
            </div>
        </div>
    );

}