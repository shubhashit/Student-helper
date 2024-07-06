import React from 'react'
import Navbar from './Navbar'
import Todolist from './Todolist'
import ClassesAndSubjects from './ClassesAndSubjects'

export default function Landingpage() {
    return (
        <div className='bg-[#05040460] h-fit min-h-[100vh] gradientbackground pl-4 pr-4 overflow-hidden'>
            <Navbar></Navbar>
            <div className=' h-[40vh] max-md:flex-col flex flex-row text-white mt-4'>
                <Todolist></Todolist>
                //here is the cal
            </div>
            <ClassesAndSubjects></ClassesAndSubjects>
        </div>
    )
}
