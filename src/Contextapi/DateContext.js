import React, { createContext, useState, useContext } from 'react';

const DateContext = createContext();

export const DateProvider = ({ children }) => {
    const [currdate, setcurrdate] = useState(new Date());

    const setCurrdate = (newdate) => {
        setcurrdate(newdate);
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
