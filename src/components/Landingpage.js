import React from 'react'
import Navbar from './Navbar'
import Todolist from './Todolist'

export default function Landingpage() {
    return (
        <div className='bg-[#05040460] h-[100vh] gradientbackground pl-4 pr-4 overflow-hidden'>
            <Navbar></Navbar>
            <div className='w-[100vw] h-full flex flex-row'>
                <Todolist></Todolist>
                //here is the cal
            </div>
        </div>
    )
}
