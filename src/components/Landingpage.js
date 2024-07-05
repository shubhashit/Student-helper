import React from 'react'
import Navbar from './Navbar'
import Todolist from './Todolist'
import ClassesAndSubjects from './ClassesAndSubjects'

export default function Landingpage() {
    return (
        <div className='bg-[#05040460] h-fit min-h-[100vh] gradientbackground pl-4 pr-4 overflow-hidden'>
            <Navbar></Navbar>
            <div className='w-[100vw] h-[40vh] flex flex-row text-white mt-4'>
                <Todolist></Todolist>
                //here is the cal
            </div>
            {/* <div className='h-fit min-h-[40vh] bg-box  mt-4 rounded-2xl absolute mainDivWidth'> */}
                {/* <div className='h-[50%] w-[50%] bg-[#58bc82]  relative bottom-2 right-0 -z-0' ></div> */}
                <ClassesAndSubjects></ClassesAndSubjects>
            {/* </div> */}
        </div>
    )
}
