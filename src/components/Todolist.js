import React, { useEffect, useRef, useState } from 'react'
import "../components/Todolist.css"
import { useUser } from '../Contextapi/UserContext';

export default function Todolist(props) {
    const { user } = useUser();
    console.log(user);
    const taskRef = useRef();
    const[todolist , setTodolist] = useState([]);
    const[refersh , setRefresh] = useState(false);

    async function addTask() {
        let task = taskRef.current.value;
        console.log(task)
        try {
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "Content-Type": "application/json"
            }

            let bodyContent = JSON.stringify({
                "email": user.email,
                "item": task,
                "action": "add"
            });

            let response = await fetch("https://node-api-wjsa.onrender.com/todo/update", {
                method: "POST",
                body: bodyContent,
                headers: headersList
            });

            let data = await response.text();
            console.log(data);
            setRefresh(!refersh);
            taskRef.current.value = ""
        } catch (error) {
            console.log(error)
        }
        // taskRef.current.value = ""
    }

    async function deleteTask(index){
        const task = todolist[index];
        console.log(task)
        try {
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "Content-Type": "application/json"
            }

            let bodyContent = JSON.stringify({
                "email": user.email,
                "item": task,
                "action": "remove"
            });

            let response = await fetch("https://node-api-wjsa.onrender.com/todo/update", {
                method: "POST",
                body: bodyContent,
                headers: headersList
            });

            let data = await response.text();
            console.log(data);
            setRefresh(!refersh);
            taskRef.current.value = ""
        } catch (error) {
            console.log(error)
        }
    }

    // to get all the task in todolist 
    useEffect(() => {
        async function fetchdata() {
            try {
                let headersList = {
                    "Accept": "*/*",
                    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                    "Content-Type": "application/json"
                }

                let bodyContent = JSON.stringify({
                    "email": user.email
                });

                let response = await fetch("https://node-api-wjsa.onrender.com/todo/getall", {
                    method: "POST",
                    body: bodyContent,
                    headers: headersList
                });

                let data = await response.json();
                // console.log(data);

                setTodolist(data.todolist)
            } catch (error) {
                console.log(error)
            }
            

        }
        fetchdata();


    }, [refersh])


    return (
        <div className="card h-[100%] text-white max-md:w-full w-[60%] text-xl max-md:h-[40vh] max-md:mb-6">
            <div className="bg max-md:p-1 p-2 pl-4 flex flex-col justify-start items-start">
                <div className=''>
                    Today's task:
                </div>
                <div className='flex flex-row items-center w-full'>
                    <div className="form__group field">
                        <input ref={taskRef} type="input" className="form__field" placeholder="Task" required="" />
                        <label htmlFor="Task" className="form__label">Task</label>
                    </div>
                    <i className="fa-solid fa-plus cursor-pointer ml-2" onClick={addTask}></i>
                </div>
                <div className='mt-4 flex w-full flex-col overflow-y-scroll scroll scrollBarAdjustment'>


                    {
                        todolist && todolist.map((item , index)=>{
                            return (<div key={index} className='flex flex-row w-full max-md:items-start items-center justify-between max-md:pr-3 pr-8 max-md:pl-0 pl-4'>
                                <div className='flex flex-row max-md:items-start items-center'>
                                    <label className="container w-4 max-md:mr-3 mr-4 max-md:mt-2" >
                                        <input type="checkbox" />
                                        <div className="checkmark "></div>
                                    </label>

                                    <div>{item}</div>
                                </div>
                                <i className="fa-solid fa-trash max-md:mt-2 cursor-pointer" onClick={()=>deleteTask(index)}></i>
                            </div>)
                        })
                    }

                </div>
            </div>
            <div className="blob"></div>
        </div>

    )
}
