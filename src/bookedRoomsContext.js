import { createContext, useContext, useState } from 'react';
import React from "react";

const BookedRoomsContext = createContext();

export function useBookedRooms() {
  return useContext(BookedRoomsContext);
}

export function BookedRoomsProvider({ children }) {
  const [bookedRooms, setBookedRooms] = useState([]);

  const addToBookedRooms = (room) => {
    setBookedRooms([...bookedRooms, room]);
  };

  return (
    <BookedRoomsContext.Provider value={{ bookedRooms, addToBookedRooms }}>
      {children}
    </BookedRoomsContext.Provider>
  );
}
