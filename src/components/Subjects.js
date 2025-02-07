import React from 'react'

export default function Subjects() {
  return (
    <div className='w-[40%] max-md:w-full text-white p-3  text-lg h-full'>
      <div className='font-bold text-xl'>Subjects :</div>
      <div>
        <div className="notification relative mt-2 w-[90%] max-md:w-full">
          <div className="notiglow"></div>
          <div className="notiborderglow"></div>
          <div className="notititle">Power Electronics</div>
          <div className="notibody">Sushma Gupta</div>
          {/* <div className='absolute z-10 w-[20%] min-h-fit h-8 border right-4 tickmark border-[#85f5b4] rounded-md flex flex-row text-sm items-center justify-center'>
            <div className='w-1/2 flex items-center justify-center h-full text-[#58bc82] hover:bg-[#58bc82] hover:text-[#18181b] hover:font-bold'>Yes</div>
            <div className='border border-[#85f5b4] h-full'></div>
            <div className='w-1/2 flex items-center justify-center h-full text-[#58bc82] hover:bg-[#58bc82] hover:text-[#18181b] hover:font-bold' >No</div>
          </div> */}
        </div>
        <div className="notification relative mt-2 w-[90%] max-md:w-full">
          <div className="notiglow"></div>
          <div className="notiborderglow"></div>
          <div className="notititle">Hum-454</div>
          <div className="notibody">MD</div>
          {/* <div className='absolute z-10 w-[20%] min-h-fit h-8 border right-4 tickmark border-[#85f5b4] rounded-md flex flex-row text-sm items-center justify-center'>
            <div className='w-1/2 flex items-center justify-center h-full text-[#58bc82] hover:bg-[#58bc82] hover:text-[#18181b] hover:font-bold'>Yes</div>
            <div className='border border-[#85f5b4] h-full'></div>
            <div className='w-1/2 flex items-center justify-center h-full text-[#58bc82] hover:bg-[#58bc82] hover:text-[#18181b] hover:font-bold' >No</div>
          </div> */}
        </div>
        <div className="notification relative mt-2 w-[90%] max-md:w-full">
          <div className="notiglow"></div>
          <div className="notiborderglow"></div>
          <div className="notititle">Open Elective</div>
          <div className="notibody">N.A.</div>
          {/* <div className='absolute z-10 w-[20%] min-h-fit h-8 border right-4 tickmark border-[#85f5b4] rounded-md flex flex-row text-sm items-center justify-center'>
            <div className='w-1/2 flex items-center justify-center h-full text-[#58bc82] hover:bg-[#58bc82] hover:text-[#18181b] hover:font-bold'>Yes</div>
            <div className='border border-[#85f5b4] h-full'></div>
            <div className='w-1/2 flex items-center justify-center h-full text-[#58bc82] hover:bg-[#58bc82] hover:text-[#18181b] hover:font-bold' >No</div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
