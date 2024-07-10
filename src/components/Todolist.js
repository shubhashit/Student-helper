import React from 'react'
import "../components/Todolist.css"

export default function Todolist() {
    return (
        <div className="card h-[100%] text-white max-md:w-full w-[60%] text-lg max-md:h-[40vh] max-md:mb-3">
            <div className="bg max-md:p-1 p-2 pl-4 flex flex-col justify-start items-start">
                <div className=''>
                    Today's task:
                </div>
                <div className='flex flex-row items-center w-full'>
                    <div class="form__group field">
                        <input type="input" class="form__field" placeholder="Task" required="" />
                        <label for="Task" class="form__label">Task</label>
                    </div>
                    <i class="fa-solid fa-plus"></i>
                </div>
                <div className='mt-4 flex w-full flex-col overflow-y-scroll scroll scrollBarAdjustment'>

                    <div className='flex flex-row w-full max-md:items-start items-center justify-between max-md:pr-3 pr-8 max-md:pl-0 pl-4'>
                        <div className='flex flex-row max-md:items-start items-center'>
                            <label className="container w-4 max-md:mr-3 mr-4 max-md:mt-2" >
                                <input type="checkbox" />
                                <div className="checkmark "></div>
                            </label>

                            <div>Some task to be done by the end of the day</div>
                        </div>
                        <i className="fa-solid fa-trash max-md:mt-2 cursor-pointer"></i>
                    </div>
                    <div className='flex flex-row w-full max-md:items-start items-center justify-between max-md:pr-3 pr-8 max-md:pl-0 pl-4'>
                        <div className='flex flex-row max-md:items-start items-center'>
                            <label className="container w-4 max-md:mr-3 mr-4 max-md:mt-2" >
                                <input type="checkbox" />
                                <div className="checkmark "></div>
                            </label>

                            <div>Some task to be done by the end of the day</div>
                        </div>
                        <i className="fa-solid fa-trash max-md:mt-2 cursor-pointer"></i>
                    </div>
                    <div className='flex flex-row w-full max-md:items-start items-center justify-between max-md:pr-3 pr-8 max-md:pl-0 pl-4'>
                        <div className='flex flex-row max-md:items-start items-center'>
                            <label className="container w-4 max-md:mr-3 mr-4 max-md:mt-2" >
                                <input type="checkbox" />
                                <div className="checkmark "></div>
                            </label>

                            <div>Some task to be done by the end of the day</div>
                        </div>
                        <i className="fa-solid fa-trash max-md:mt-2 cursor-pointer"></i>
                    </div>
                    <div className='flex flex-row w-full max-md:items-start items-center justify-between max-md:pr-3 pr-8 max-md:pl-0 pl-4'>
                        <div className='flex flex-row max-md:items-start items-center'>
                            <label className="container w-4 max-md:mr-3 mr-4 max-md:mt-2" >
                                <input type="checkbox" />
                                <div className="checkmark "></div>
                            </label>

                            <div>Some task to be done by the end of the day</div>
                        </div>
                        <i className="fa-solid fa-trash max-md:mt-2 cursor-pointer"></i>
                    </div>


                </div>
            </div>
            <div className="blob"></div>
        </div>

    )
}
