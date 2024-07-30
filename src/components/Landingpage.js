import React, { useState } from 'react'
import Navbar from './Navbar'
import Todolist from './Todolist'
import ClassesAndSubjects from './ClassesAndSubjects'
import Calendar from './Calender'
import { useDate } from '../Contextapi/DateContext'

export default function Landingpage() {
    const {currdate , setCurrdate} = useDate()
    // console.log(currdate);
    // console.log(currdate.getDay())
    // const day = currdate.getDay();
    return (
        <div className='bg-[#05040460] h-fit min-h-[100vh] gradientbackground pl-4 pr-4 overflow-hidden'>
            <Navbar></Navbar>
            <div className='max-md:h-fit h-[40vh] max-md:flex-col flex flex-row text-white mt-4 justify-between bg-black rounded-lg'>
                <Todolist ></Todolist>
                <Calendar></Calendar>
            </div>
            <ClassesAndSubjects ></ClassesAndSubjects>
        </div>
    )
}
