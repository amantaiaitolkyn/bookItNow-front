import React, { createContext, useContext, useState } from 'react';

const BookedRoomsContext = createContext();

export function useBookedRooms() {
  const context = useContext(BookedRoomsContext);

  if (!context) {
    throw new Error('useBookedRooms must be used within a BookedRoomsProvider');
  }

  return context;
}

export function BookedRoomsProvider({ children }) {
  const [bookedRooms, setBookedRooms] = useState([]);

  const addToBookedRooms = (room) => {
    setBookedRooms([...bookedRooms, room]);
  };

  return (
      <BookedRoomsContext.Provider value={{ bookedRooms, setBookedRooms, addToBookedRooms }}>
        {children}
      </BookedRoomsContext.Provider>
  );
}
