import React, { useState } from 'react'
import "../components/Signin.css"
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const navigate = useNavigate()
    const [userinfo , setUserinfo] = useState({
        "username" : "",
        "email" : "",
        "password" : ""
    })
    function toSignin(){
        navigate('/signin')
    }
    const signUp = (e)=>{
        e.preventDefault();
        console.log(e.target[0].value)
        console.log(e.target[1].value)
        console.log(e.target[2].value)
        console.log(userinfo)
    }
    function handleChange(e){
        const { name, value } = e.target;
        console.log(name , value)
        setUserinfo((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }
    return (
        <div className='h-[100vh] w-[100-vw] flex items-center justify-center'>
            <form className="form border-white" onSubmit={signUp}>
                <span className="input-span">
                    <label htmlFor="username" className="label">Username</label>
                    <input type="text" name="username" id="username" onChange={handleChange}
                    />
                </span>
                <span className="input-span">
                    <label htmlFor="email" className="label">Email</label>
                    <input type="email" name="email" id="email" onChange={handleChange}
                    />
                </span>
                <span className="input-span">
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" name="password" id="password" onChange={handleChange}
                    />
                </span>
                <span className="span"><a href="#">Forgot password?</a></span>
                <input className="submit text-center" type="submit" value="Log in" />
                <span className="span flex flex-row">Already have an account? <div className='cursor-pointer ml-3' onClick={toSignin}>Sign in</div></span>
            </form>

        </div>
    )
}
