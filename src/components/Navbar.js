import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../Contextapi/UserContext';
// import './Navbar.css'

export default function Navbar() {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  function toChat() {
    navigate('/chat')
  }
  function toHome() {
    navigate('/')
  }
  function toggleSidebar() {
    console.log('here')
    setIsOpen(!isOpen);
  }
  console.log(isOpen)
  return (
    <div className={`${isOpen? "h-fit":"h-16"} max-md:text-lg text-xl flex flex-col max-md:p-1 p-2 text-white justify-between items-center`}>
      <div className='flex flex-row justify-between items-center w-full h-16'>

        <div className=' max-md:ml-2 ml-4 cursor-pointer'>
          logo + name
        </div>
        <div className='flex flex-row max-md:hidden'>
          <div className='mr-2 ml-2 hover:text-[#58bc82] cursor-pointer' onClick={toHome}>Home</div>
          <div className='mr-2 ml-2 hover:text-[#58bc82] cursor-pointer' onClick={toChat}>Chat</div>
        </div>
        <div className='max-md:hidden mr-4 flex flex-row items-center cursor-pointer'>
          <div className='mr-2'>{user && user.username}</div>
          <i className="fa-solid fa-right-from-bracket"></i>
        </div>
        <div className='md:hidden cursor-pointer sidebar relative p-1 w-fit h-fit' onClick={toggleSidebar}>
          <i className="fa-solid fa-bars" ></i>
        </div>
      </div>


      <nav className={`${isOpen ? "" : "hidden "} nav w-[100vw] pl-4 pr-4 flex flex-col `}>
        <div>Home</div>
        <div>Chat</div>
      </nav>
    </div>
  )
}
