import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({});

    const updateUser = (newData) => {
        setUserData({ ...userData, ...newData });
    };

    return (
        <UserContext.Provider value={{ userData, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};