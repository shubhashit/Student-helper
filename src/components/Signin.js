import React from 'react'
import '../components/Signin.css'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../FIrebase/Firebase'
import { useUser } from '../Contextapi/UserContext'

export default function Signin() {
  const { setUser } = useUser();  
  const navigate = useNavigate()
  function toSignup() {
    navigate('/signup')
  }

  const signIn = async (e)=>{
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    console.log(email , password)
    try {
      const userCredential = await signInWithEmailAndPassword(auth , email , password)
      const user = userCredential.user
      setUser({"email" : user.email , "username" : user.displayName})
      console.log(user)
      navigate('/')
    } catch (error) {
      alert(error.code)
      console.log(error);
    }
  }
  return (
    <div className='h-[100vh] w-[100-vw] flex items-center justify-center'>
      <form className="form " onSubmit={signIn}> {/* border-2 border-white p-4 rounded-md */}
        <span className="input-span">
          <label htmlFor="email" className="label">Email</label>
          <input type="email" readOnly={false} name="email" id="email" value={"test@gmail.com"}
          /></span>
        <span className="input-span mb-3">
          <label htmlFor="password" className="label">Password</label>
          <input type="password" name="password" id="password" value={"asefjil"}
          /></span>
        {/* <span className="span"><a href="#">Forgot password?</a></span> */}
        <input className="submit text-center" type="submit" value="Log in" />
        <span className="span flex flex-row">Don't have an account? <div className='cursor-pointer ml-3 text-[#58bc82]' onClick={toSignup}>Sign up</div></span>
      </form>

    </div>
  )
}
