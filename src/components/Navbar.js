import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../Contextapi/UserContext';

export default function Navbar() {
  const {user} = useUser();
  const navigate = useNavigate();
  function toChat (){
    navigate('/chat')
  }
  function toHome(){
    navigate('/')
  }
  return (
    <div className='h-16 max-md:text-lg text-xl flex flex-row max-md:p-1 p-2 text-white justify-between items-center'>
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
      <div className='md:hidden cursor-pointer'>
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  )
}
