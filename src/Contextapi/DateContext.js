import React, { createContext, useState, useContext } from 'react';

const DateContext = createContext();

export const DateProvider = ({ children }) => {
    const [currdate, setCurrdate] = useState(new Date());

    const updateDate = (newdate) => {
        setCurrdate(newdate);
    };

    return (
        <DateContext.Provider value={{ currdate, setCurrdate }}>
            {children}
        </DateContext.Provider>
    );
};

export const useDate = () => {
    return useContext(DateContext);
};
