import React from 'react'
import "../components/Todolist.css"

export default function Todolist() {
    return (
        <div className="card text-white w-full">
            <div className="bg p-2 pl-4 flex flex-col justify-start items-start">
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

                    <div className='flex flex-row w-full items-center justify-between pr-8'>
                        <div className='flex flex-row items-center'>
                            <label className="container w-4 mr-2" >
                                <input type="checkbox" />
                                <div className="checkmark "></div>
                            </label>

                            <div>Some task to be done by the end of the day</div>
                        </div>
                        <i class="fa-solid fa-trash"></i>
                    </div>
                    <div className='flex flex-row w-full items-center justify-between pr-8'>
                        <div className='flex flex-row items-center'>
                            <label className="container w-4 mr-2" >
                                <input type="checkbox" />
                                <div className="checkmark "></div>
                            </label>

                            <div>Some task to be done by the end of the day</div>
                        </div>
                        <i class="fa-solid fa-trash"></i>
                    </div>
                    <div className='flex flex-row w-full items-center justify-between pr-8'>
                        <div className='flex flex-row items-center'>
                            <label className="container w-4 mr-2" >
                                <input type="checkbox" />
                                <div className="checkmark "></div>
                            </label>

                            <div>Some task to be done by the end of the day</div>
                        </div>
                        <i class="fa-solid fa-trash"></i>
                    </div>
                    <div className='flex flex-row w-full items-center justify-between pr-8'>
                        <div className='flex flex-row items-center'>
                            <label className="container w-4 mr-2" >
                                <input type="checkbox" />
                                <div className="checkmark "></div>
                            </label>

                            <div>Some task to be done by the end of the day</div>
                        </div>
                        <i class="fa-solid fa-trash"></i>
                    </div>
                    <div className='flex flex-row w-full items-center justify-between pr-8'>
                        <div className='flex flex-row items-center'>
                            <label className="container w-4 mr-2" >
                                <input type="checkbox" />
                                <div className="checkmark "></div>
                            </label>

                            <div>Some task to be done by the end of the day</div>
                        </div>
                        <i class="fa-solid fa-trash"></i>
                    </div>
                    <div className='flex flex-row w-full items-center justify-between pr-8'>
                        <div className='flex flex-row items-center'>
                            <label className="container w-4 mr-2" >
                                <input type="checkbox" />
                                <div className="checkmark "></div>
                            </label>

                            <div>Some task to be done by the end of the day</div>
                        </div>
                        <i class="fa-solid fa-trash"></i>
                    </div>
                    <div className='flex flex-row w-full items-center justify-between pr-8'>
                        <div className='flex flex-row items-center'>
                            <label className="container w-4 mr-2" >
                                <input type="checkbox" />
                                <div className="checkmark "></div>
                            </label>

                            <div>Some task to be done by the end of the day</div>
                        </div>
                        <i class="fa-solid fa-trash"></i>
                    </div>


                </div>
            </div>
            <div className="blob"></div>
        </div>

    )
}
