import React from 'react'
import Classes from './Classes'
import Subjects from './Subjects'

export default function ClassesAndSubjects() {
  return (
    <div className='flex flex-row h-fit min-h-[40vh] rounded-2xl bg-black mt-4 mb-4'>
      <Classes></Classes>  
      <Subjects></Subjects>
    </div>
  )
}
