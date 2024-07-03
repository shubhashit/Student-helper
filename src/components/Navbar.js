import React from 'react'

export default function Navbar() {
  return (
    <div className='h-12 flex flex-row p-2 text-white justify-between items-center'>
      <div className='ml-4'>
        logo + name
      </div>
      <div>
        <div>Home</div>
      </div>
      <div className='mr-4 flex flex-row items-center'>
        <div className='mr-2'>Sign-in-name</div>
        <i className="fa-solid fa-right-from-bracket"></i>
      </div>
    </div>
  )
}
