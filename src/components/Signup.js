import React from 'react'
import "../components/Signin.css"
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../FIrebase/Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { useUser } from '../Contextapi/UserContext'

export default function Signup() {
    const {setUser} = useUser();
    const navigate = useNavigate()

    function toSignin() {
        navigate('/signin')
    }

    const signUp = async (e) => {
        e.preventDefault();
        let username = e.target[0].value;
        let email = e.target[1].value;
        let password = e.target[2].value;
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            console.log(user)
            setUser({username  , email})
            // call the api for the mongobd backend for saving the user and creating the todo list 
            // await setDoc(doc(db , "todo" , user.uid) , {}); 
            try {
                let headersList = {
                    "Accept": "*/*",
                    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                    "Content-Type": "application/json"
                }

                let bodyContent = JSON.stringify({
                    "name": username,
                    "email": email
                });

                let response = await fetch("https://node-api-wjsa.onrender.com/user/createuser", {
                    method: "POST",
                    body: bodyContent,
                    headers: headersList
                });

                let data = await response.json();
                console.log(data);

            } catch (error) {
                
            }
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='h-[100vh] w-[100-vw] flex items-center justify-center'>
            <form className="form border-white" onSubmit={signUp}>
                <span className="input-span">
                    <label htmlFor="username" className="label">Username</label>
                    <input type="text" name="username" id="username"
                    />
                </span>
                <span className="input-span">
                    <label htmlFor="email" className="label">Email</label>
                    <input type="email" name="email" id="email"
                    />
                </span>
                <span className="input-span mb-3">
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" name="password" id="password"
                    />
                </span>
                {/* <span className="span"><a href="#">Forgot password?</a></span> */}
                <input className="submit text-center" type="submit" value="Log in" />
                <span className="span flex flex-row">Already have an account? <div className='cursor-pointer ml-3 text-[#58bc82]' onClick={toSignin}>Sign in</div></span>
            </form>

        </div>
    )
}
