import React, { useState } from 'react'
import Navbar from './Navbar'
import Todolist from './Todolist'
import ClassesAndSubjects from './ClassesAndSubjects'
import Calendar from './Calender'

export default function Landingpage() {
    const [selectedDate , setSelectedDate] = useState(new Date())
    console.log(selectedDate)
    console.log(selectedDate.getDay())
    const day = selectedDate.getDay();
    return (
        <div className='bg-[#05040460] h-fit min-h-[100vh] gradientbackground pl-4 pr-4 overflow-hidden'>
            <Navbar></Navbar>
            <div className='max-md:h-fit h-[40vh] max-md:flex-col flex flex-row text-white mt-4 justify-between bg-black rounded-lg'>
                <Todolist ></Todolist>
                <Calendar setSelectedDate={setSelectedDate}></Calendar>
            </div>
            <ClassesAndSubjects day={day}></ClassesAndSubjects>
        </div>
    )
}
