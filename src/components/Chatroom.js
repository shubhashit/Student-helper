import React, { useEffect, useRef, useState } from 'react'
import './Chatroom.css'
import { database } from '../FIrebase/Firebase'
import { ref, child, push, update, get, onValue, off } from "firebase/database";
import { useUser } from '../Contextapi/UserContext'


export default function Chatroom() {
  const { user } = useUser();
  const textref = useRef();
  const [chats, setChats] = useState()

  useEffect(() => {
    const dataRef = ref(database, 'groupChat'); // Adjust the path to your data
    try {

      onValue(dataRef, (snapshot) => {
        const value = snapshot.val();
        console.log(value)
        setChats(value);
      });
      // console.log(chats)

    } catch (error) {
      console.log(error)
    }

    // Clean up the listener on component unmount
    return () => {
      off(dataRef);
    };
  }, [])

  console.log(chats)

  async function onSend() {
    let date = new Date()
    console.log(textref.current.value)
    let message = textref.current.value;
    try {
      console.log('here')
      const postData = {
        username: user.username,
        timestamp: date,
        email: user.email,
        message: message,
      };
      // Get a key for a new Post.
      const newPostKey = push(child(ref(database), 'groupChat')).key;

      // Write the new post's data simultaneously in the posts list and the user's post list.
      const updates = {};
      updates['/groupChat/' + newPostKey] = postData;
      // updates['/user-posts/' + uid + '/' + newPostKey] = postData;
      textref.current.value = "";
      return update(ref(database), updates);
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div className='hchatroom w-[42%] p-3 flex flex-col-reverse bg-black rounded-xl mt-4'>

      <div className='w-full bg-[#18181b] text-white p-1 flex flex-row justify-between items-center'>
        <input ref={textref} className='outline-none  bg-[#18181b] ml-3 w-[75%]' type="text" placeholder='Type here....' />
        <i className="fa-solid fa-paper-plane mr-3 cursor-pointer" onClick={onSend}></i>
      </div>
      <div className='mb-3 overflow-scroll flex flex-col overflow-x-hidden scrollBarAdjustmentChatroom'>

        {/* all the chats here single box single text  */}

        {
          chats && Object.keys(chats).map(key => {
            const item = chats[key];
            return (
              <div key={key} className={`w-full ${item.email === user.email ? "flex justify-end":"flex"}`}>

                <div className='w-[70%] h-fit text-white p-2 bg-[#18181b] mb-2 rounded-lg '>
                  <div className='text-lg text-[#58bc82] font-bold mb-2'>{item.username}</div>
                  <div className="text-sm">{item.message}</div>
                </div>
              </div>
            )
          })
        }



      </div>
    </div>
  )
}
