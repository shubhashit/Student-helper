import React, { useEffect, useState } from 'react'
import "../components/Classes.css"
import { TimeTable } from "../Schedule/Schedule.js"

export default function Classes(props) {
  const [classes , setClasses] = useState([]);
  useEffect(()=>{
    setClasses(TimeTable[props.day])
  },[])
  return (
    <div className='w-[60%] max-md:w-full h-full p-3 text-white text-lg'>
      <div className='font-bold text-xl'>Today's Classes :</div>
      {classes && classes.map((entry, index) => (
        <div key={index} className='max-md:w-full'>
          <div className="notification relative mt-2 w-[90%] max-md:w-full">
            <div className="notiglow"></div>
            <div className="notiborderglow"></div>
            <div className="notititle ml-2">{entry.Subject} </div>
            <div className="notibody  flex flex-row items-center ml-2">{entry.Teacher} <div className="h-full border-l border-[#999d9c] ml-3 pl-3">{`${entry.Start_time} - ${entry.End_time}`}</div> </div>
            <div className='absolute z-10 w-[20%] min-h-fit h-8 border right-4 tickmark border-[#85f5b4] rounded-md flex flex-row text-sm items-center justify-center'>
              <div className='w-1/2 flex items-center justify-center h-full text-[#58bc82] hover:bg-[#58bc82] hover:text-[#18181b] hover:font-bold'>Yes</div>
              <div className='border border-[#85f5b4] h-full'></div>
              <div className='w-1/2 flex items-center justify-center h-full text-[#58bc82] hover:bg-[#58bc82] hover:text-[#18181b] hover:font-bold' >No</div>
            </div>
          </div>
        </div>
      ))}

      

    </div>
  )
}
