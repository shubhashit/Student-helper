import React, { useEffect, useState } from 'react'
import "../components/Classes.css"
import { TimeTable } from "../Schedule/Schedule.js"
import { useDate } from '../Contextapi/DateContext.js';
import { useUser } from '../Contextapi/UserContext.js';

export default function Classes(props) {
  const [classes, setClasses] = useState([]);
  const { user } = useUser();
  const { currdate } = useDate();
  const [attendence, setAttendece] = useState({});
  const [refresh , Setrefresh] = useState(false);

  useEffect(() => {
    console.log(currdate)
    const day = currdate ? currdate.getDay() : 0;
    // let day = 2
    const date = currdate ? currdate.toString().substring(0, 15) : "";
    console.log(date)
    console.log(TimeTable, day - 1)
    setClasses(TimeTable[day])

    async function fetchdata() {
      try {
        let headersList = {
          "Accept": "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)",
          "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
          "email": user.email,
          "date": date
        });

        let response = await fetch("https://node-api-wjsa.onrender.com/attendence/getCuurent", {
          method: "POST",
          body: bodyContent,
          headers: headersList
        });

        let data = await response.json();
        console.log(data)
        console.log(data.classes)
        if (data.classes) {
          setAttendece(data.classes)
        }
        else{
          setAttendece({})
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchdata();


  }, [refresh , currdate])

  async function onClickYes(index) {
    console.log("here" , index)
    const date = currdate.toString().substring(0, 15);
    try {
      let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json"
      }

      let bodyContent = JSON.stringify({
        "email": user.email,
        "date": date,
        "period": index,
        "marked": "pre"
      });

      let response = await fetch("https://node-api-wjsa.onrender.com/attendence/setCurrent", {
        method: "POST",
        body: bodyContent,
        headers: headersList
      });

      let data = await response.json();
      console.log(data);
      Setrefresh(!refresh)

    } catch (error) {
      console.log(error)
    }
  }
  async function onClickNo(index) {
    console.log("here", index)
    const date = currdate.toString().substring(0, 15);
    try {
      let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json"
      }

      let bodyContent = JSON.stringify({
        "email": user.email,
        "date": date,
        "period": index,
        "marked": "abs"
      });

      let response = await fetch("https://node-api-wjsa.onrender.com/attendence/setCurrent", {
        method: "POST",
        body: bodyContent,
        headers: headersList
      });

      let data = await response.json();
      console.log(data);
      Setrefresh(!refresh)

    } catch (error) {
      console.log(error)
    }
  }

  console.log(attendence)
  console.log(currdate)
  // console.log(attendence[1])
  return (
    <div className='w-[60%] max-md:w-full h-full p-3 text-white text-lg'>
      <div className='font-bold text-xl'>Today's Classes :</div>


      {classes && classes.map((entry, index) => (
        <div key={index} className='max-md:w-full'>
          <div className="notification relative mt-2 w-[90%] max-md:w-full">
            <div className="notiglow"></div>
            <div className="notiborderglow"></div>
            <div className="notititle ml-2">{entry.Subject}</div>
            <div className="notibody  flex flex-row items-center ml-2">{entry.Teacher} <div className="h-full border-l border-[#999d9c] ml-3 pl-3">{`${entry.Start_time} - ${entry.End_time}`}</div> </div>
            <div className='absolute z-10 w-[20%] min-h-fit h-8 border right-4 tickmark border-[#85f5b4] rounded-md flex flex-row text-sm items-center justify-center cursor-pointer'>


              <div className={`w-1/2 flex items-center justify-center h-full  hover:bg-[#58bc82] hover:text-[#18181b] hover:font-bold ${attendence[entry.Period] == "pre" ? "bg-[#58bc82] text-[#18181b] font-bold" : "text-[#58bc82]"}`} onClick={() => { onClickYes(entry.Period) }}>Yes</div>
              <div className='border border-[#85f5b4] h-full'></div>
              <div className={`w-1/2 flex items-center justify-center h-full  hover:bg-[#58bc82] hover:text-[#18181b] hover:font-bold ${attendence[entry.Period] == "abs" ? "bg-[#58bc82] text-[#18181b] font-bold" : "text-[#58bc82]"}`} onClick={() => { onClickNo(entry.Period) }}>No</div>


            </div>
          </div>
        </div>
      ))}

      {
        !classes && <>No classes for today</>
      }



    </div>
  )
}
