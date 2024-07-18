import React from 'react'
import './Chatroom.css'
export default function Chatroom() {
  return (
    <div className='hchatroom w-[42%] p-3 flex flex-col-reverse bg-black rounded-xl mt-4'>

      <div className='w-full bg-[#18181b] text-white p-1 flex flex-row justify-between items-center'>
        <input className='outline-none  bg-[#18181b] ml-3 w-[75%]' type="text" placeholder='Type here....' />
        <i className="fa-solid fa-paper-plane mr-3"></i>
      </div>
      <div className='mb-3 overflow-scroll flex flex-col-reverse overflow-x-hidden scrollBarAdjustmentChatroom'>

        {/* all the chats here single box single text  */}

        <div className='w-[70%] h-fit text-white p-2 bg-[#18181b] mb-2 rounded-lg'>
          <div className='text-lg text-[#58bc82] font-bold mb-2'>Username</div>
          <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque itaque veritatis ipsa ad tempore veniam fugiat in, fugit sunt placeat. this is first</div>
        </div>
        <div className='w-[70%] h-fit text-white p-2 bg-[#18181b] mb-2 rounded-lg'>
          <div className='text-lg text-[#58bc82] font-bold mb-2'>Username</div>
          <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque itaque veritatis ipsa ad tempore veniam fugiat in, fugit sunt placeat.</div>
        </div>
        <div className='w-[70%] h-fit text-white p-2 bg-[#18181b] mb-2 rounded-lg'>
          <div className='text-lg text-[#58bc82] font-bold mb-2'>Username</div>
          <div className="text-sm">Lorem t.</div>
        </div>
        <div className='w-[70%] h-fit text-white p-2 bg-[#18181b] mb-2 rounded-lg'>
          <div className='text-lg text-[#58bc82] font-bold mb-2'>Username</div>
          <div className="text-sm">Lorem ipsum dolor sitpsa ad tempore veniam fugiat in, fugit sunt placeat.</div>
        </div>
        <div className='w-[70%] h-fit text-white p-2 bg-[#18181b] mb-2 rounded-lg'>
          <div className='text-lg text-[#58bc82] font-bold mb-2'>Username</div>
          <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque itaque veritatis ipsa ad tempore veniam fugiat in, fugit sunt placeat.</div>
        </div>
        <div className='w-[70%] h-fit text-white p-2 bg-[#18181b] mb-2 rounded-lg'>
          <div className='text-lg text-[#58bc82] font-bold mb-2'>Username</div>
          <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque itaque veritatis ipsa ad tempore veniam fugiat in, fugit sunt placeat.</div>
        </div>
        <div className='w-[70%] h-fit text-white p-2 bg-[#18181b] mb-2 rounded-lg'>
          <div className='text-lg text-[#58bc82] font-bold mb-2'>Username</div>
          <div className="text-sm">Lorem ipsum dolor sittaque veritatis ipsa ad tempore veniam fugiat in, fugit sunt placeat.</div>
        </div>
        <div className='w-[70%] h-fit text-white p-2 bg-[#18181b] mb-2 rounded-lg'>
          <div className='text-lg text-[#58bc82] font-bold mb-2'>Username</div>
          <div className="text-sm">Lorem ipsum dolor sit</div>
        </div>
        <div className='w-[70%] h-fit text-white p-2 bg-[#18181b] mb-2 rounded-lg'>
          <div className='text-lg text-[#58bc82] font-bold mb-2'>Username</div>
          <div className="text-sm">Lorem ipsum dolor sietur adipisicing elit. Cumque itaque veritatis ipsa ad tempore veniam fugiat in, fugit sunt placeat.</div>
        </div>
        <div className='w-[70%] h-fit text-white p-2 bg-[#18181b] mb-2 rounded-lg'>
          <div className='text-lg text-[#58bc82] font-bold mb-2'>Username</div>
          <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque itaque veritatis ipsa ad tempore veniam fugiat in, fugit sunt placeat.</div>
        </div>



      </div>
    </div>
  )
}
