import React, { useEffect, useState } from 'react';
import '../components/Calender.css';
import { useDate } from '../Contextapi/DateContext'


export default function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const { currdate, setCurrdate } = useDate(); 
    const [selectedDate, setSelectedDate] = useState(new Date());
    console.log(currdate)
    console.log(currentDate)

    useEffect(()=>{
        setCurrdate(selectedDate);
    } , [selectedDate])

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    const handleDateClick = (day) => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        setSelectedDate(new Date(year, month, day));
    };

    const renderCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDay = getFirstDayOfMonth(year, month);

        const dates = [];
        for (let i = 0; i < firstDay; i++) {
            dates.push(<div key={`empty-${i}`} className="day"></div>);
        }

        for (let date = 1; date <= daysInMonth; date++) {
            const isToday = date === currentDate.getDate() &&
                month === new Date().getMonth() &&
                year === new Date().getFullYear();

            const isSelected = selectedDate &&
                date === selectedDate.getDate() &&
                month === selectedDate.getMonth() &&
                year === selectedDate.getFullYear();

            dates.push(
                <div key={date} className={`date ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleDateClick(date)}>
                    {date}
                </div>
            );
        }

        return dates;
    };

    const handlePreviousMonth = () => {
        setCurrdate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
    };

    const handleNextMonth = () => {
        setCurrdate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
    };

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ];

    return (
        <div className="calendar-container w-[35%] max-md:w-full bg-black">
            <div className="calendar-header">
                <button onClick={handlePreviousMonth}>Prev</button>
                <h2>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
                <button onClick={handleNextMonth}>Next</button>
            </div>
            <div className="calendar-grid">
                <div className="day">Sun</div>
                <div className="day">Mon</div>
                <div className="day">Tue</div>
                <div className="day">Wed</div>
                <div className="day">Thu</div>
                <div className="day">Fri</div>
                <div className="day">Sat</div>
                {renderCalendar()}
            </div>
        </div>
    );
}