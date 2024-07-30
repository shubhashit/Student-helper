import React from 'react'
import Navbar from './Navbar'
import Chatroom from './Chatroom'
import Notes from './Notes'

export default function Chat() {
  return (
    <div className=" h-fit min-h-[100vh] gradientbackground pl-4 pr-4 overflow-hidden">
      <Navbar></Navbar>
      <div className='overflow-y-hidden flex max-md:flex-col flex-row justify-around'>
        <Chatroom></Chatroom>
        <Notes></Notes>
      </div>
    </div>
  )
}
